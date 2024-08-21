import { Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { BaseService } from 'src/abstract/base.service';
import { v4 as uuidv4 } from 'uuid';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieRecord } from './enity/movie.entity';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';


@Injectable()
export class MovieService extends BaseService {
  constructor(
    @Inject(REQUEST) private readonly request: Request,
    @InjectRepository(MovieRecord)
    private readonly movieRepository: Repository<MovieRecord>) { super() }

  async create(createMovieDto: CreateMovieDto, poster: any) {
    try {

      let token = this.request.headers.authorization
      let request: any = this._decodeUserToken(token);
      console.log("🚀 ~ file: movie.service.ts:44 ~ MovieService ~ create ~ request:", request)

      const created = this.movieRepository.create({ ...createMovieDto, poster: poster.buffer, users: request.id });
      const save = await this.movieRepository.save(created);
      return save;

    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }

  async findAll(page: number, itemsPerPage: number) {

    let token = this.request.headers.authorization
    let request: any = this._decodeUserToken(token);

    const users = request.id

    const queryBuilder = this.movieRepository.createQueryBuilder('movie');
    queryBuilder.leftJoinAndSelect('movie.users', 'users')
    queryBuilder.andWhere('movie.users = :users', { users });
    const offset = (page - 1) * itemsPerPage;
    queryBuilder.skip(offset).take(itemsPerPage);

    try {
      const [movies, total] = await queryBuilder.getManyAndCount();
      return {
        page: page,
        totalSize: total,
        data: movies
      }

    } catch (error) {
      throw new NotFoundException('Movies not found');
    }
  }

  async findOne(id: any) {
    try {

      const queryBuilder = this.movieRepository.createQueryBuilder('movie');
      queryBuilder.andWhere('movie.id = :id', { id })
      let movie = await queryBuilder.getOne()
      return movie;

    } catch (error) {
      throw new InternalServerErrorException(error.message)

    }
  }

  async update(id: string, updateMovieDto: any) {
    try {

      const existingMovie:any = await this.findOne(id)

      if (!existingMovie) {
        throw new NotFoundException(`Movie with ID ${id} not found`);
      }
      const updatedMovie = await this.movieRepository.save({
        ...existingMovie,
        ...updateMovieDto,
      });
  
      let update = await this.findOne(id)
      return update;

    } catch (error) {
      throw new InternalServerErrorException(error.message)

    }

  }

  async remove(id: string) {

    try {

      const found = await this.findOne(id);
      await this.movieRepository.delete(id);
      return found;

    } catch (error) {
      
      throw new InternalServerErrorException(error.message)

    }

  }

}

