import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards,ValidationPipe, Query, UseInterceptors, UploadedFile, Put} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  @UseInterceptors(FileInterceptor('poster'))
  async create(@Body(new ValidationPipe()) createMovieDto: CreateMovieDto, @UploadedFile()poster : Express.Multer.File) {
    return await this.movieService.create(createMovieDto,poster);
  }


  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(@Query('page') page:any,
  @Query('itemsPerPage') itemsPerPage:any) {
    return await this.movieService.findAll(page, itemsPerPage);
  }


  @Put(':id')
  @UseInterceptors(FileInterceptor('poster'))
  async update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto,@UploadedFile() poster: Express.Multer.File,) {

      const updates = { ...updateMovieDto, poster: poster ? poster.buffer : undefined };
    return await this.movieService.update(id, updates);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.movieService.remove(id);
  }
}
