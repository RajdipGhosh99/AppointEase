import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  greetApp(): string {
    return 'Backend is working ...';
  }
}
