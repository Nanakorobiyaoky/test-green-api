import { NestFactory } from '@nestjs/core';
import { M2Module } from './m2.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    M2Module,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'queue',
        queueOptions: {
          durable: true,
        },
      },
    },
  );
  await app.listen();
}

bootstrap();
