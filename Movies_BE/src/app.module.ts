import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from './auth/jwt.strategy';
import { MovieModule } from './movie/movie.module';
import { MovieRecord } from './movie/enity/movie.entity';
import { Users } from './auth/entity/users.entity';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [MovieRecord, Users],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),

    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SCRET,
    }),

    MulterModule.register({
      dest: '../public'
    }),
    MovieModule

  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule { }

