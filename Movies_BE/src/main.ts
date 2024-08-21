import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });
  app.enableCors({
    origin: true,
    methods: "GET, PUT, POST, DELETE, OPTIONS, PATCH",
    credentials: true,
  });

  app.setGlobalPrefix('/api')
  await app.listen(4000);
}
bootstrap();
