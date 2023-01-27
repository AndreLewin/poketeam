import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ValidationPipe } from './pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // https://docs.nestjs.com/pipes#global-scoped-pipes
  // app.useGlobalPipes(new ValidationPipe());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
