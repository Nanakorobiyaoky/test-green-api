import { MiddlewareConsumer, Module } from '@nestjs/common';
import { M1Controller } from './m1.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LoggerMiddleware } from '@app/utils';
import { M1Service } from './m1.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'm2',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'queue',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [M1Controller],
  providers: [M1Service],
})
export class M1Module {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
