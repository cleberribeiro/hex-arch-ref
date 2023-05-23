import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InterfaceModule } from '@interface/interface.module';
import { InfraestructureModule } from '@infraestructure/infraestructure.module';

@Module({
  imports: [
    InterfaceModule, 
    InfraestructureModule,
    ConfigModule.forRoot()
  ],
  exports: [
    InterfaceModule,
    InfraestructureModule
  ]
})
export class MainModule {}
