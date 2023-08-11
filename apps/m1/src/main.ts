import { NestFactory } from '@nestjs/core';
import { M1Module } from './m1.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(M1Module);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Тестовое задание')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('app/doc', app, document);

  await app.listen(3000);
}
bootstrap();
