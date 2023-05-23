import { Module } from '@nestjs/common';
import { AppController } from '@interface/inbound/http/controllers/app.controller';
import { AppService } from '@application/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class InterfaceModule {}
