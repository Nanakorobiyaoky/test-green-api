import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable, throwError, timeout } from 'rxjs';

@Injectable()
export class M1Service {
  private logger: Logger;
  constructor(@Inject('m2') private readonly client: ClientProxy) {
    this.logger = new Logger();
  }

  async sendMessageM1(pattern, data): Promise<Observable<string>> {
    return this.client.send(pattern, data).pipe(
      timeout({
        each: 2000,
        with: () =>
          throwError(
            () =>
              new HttpException(
                'SERVICE UNAVAILABLE',
                HttpStatus.SERVICE_UNAVAILABLE,
              ),
          ),
      }),
    );
  }
}
