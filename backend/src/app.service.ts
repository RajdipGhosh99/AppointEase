import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  greetApp(): string {
    return 'Backend is working fine...';
  }

  getProjectDetails(): Object{
    return {
      'name': "AppointEase",
      'version': 'beta-0.0.1',
      'inspired': 'calendly'
    }
  }
}
