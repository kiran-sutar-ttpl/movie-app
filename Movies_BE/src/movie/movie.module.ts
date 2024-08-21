import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieRecord } from './enity/movie.entity';


@Module({
  controllers: [MovieController],
  providers: [MovieService],
  imports: [
    TypeOrmModule.forFeature([MovieRecord])
  ]
})
export class MovieModule {}


