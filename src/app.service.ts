import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) { }

  getHello(): string {
    // console.log(process.env)
    // const computerName = this.configService.get<string>("NAME", "default value")
    return 'Hello World!';
  }
}
