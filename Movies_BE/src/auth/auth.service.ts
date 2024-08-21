import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateloginDto } from './dto/create-auth.dto';
import { BaseService } from 'src/abstract/base.service';
import { sign } from 'jsonwebtoken';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entity/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {


  constructor(

    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>

  ) { this.createUserRecord() }


  async createUserRecord() {

    let find = await this.userRepository.find();

    if (find.length == 0) {

      let users = [
        {
          email: 'hectorbarbossa@pirates.com',
          password: 'Pass@user7'
        },
        {
          email: 'jacksparrow@pirates.com',
          password: 'Pass@user8'
        },
        {
          email: 'blackbeard@pirates.com',
          password: 'Pass@user8'

        }
      ];

      for (let i = 0; i <= users.length - 1; i++) {
        const created = await this.userRepository.create(users[i]);
        const saved = await this.userRepository.save(created)
      }
    }
  }

  async create(createAuthDto: CreateloginDto) {

    try {

      const email = createAuthDto.email;
      const password = createAuthDto.password;


      let found = await this.userRepository.findOne({ where: { email, password } })

      if (!found) {
        throw new NotFoundException("User not found")
      }

      let payload = {
        id: found.id,
        email: found.email
      }

      let accessToken = sign(payload, process.env.JWT_SCRET, { expiresIn: '1h' });

      let token = {
        accessToken: accessToken,
        expiresIn: '1h'
      }

      return token

    } catch (error) {

      throw new InternalServerErrorException(error.message);

    }

  }

}
