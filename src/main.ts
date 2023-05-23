import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import { MainModule } from './main.module';

const setupPort = () => {
  return parseInt(process.env.PORT) || 8080;
}

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  
  app.use(helmet());

  const config = new DocumentBuilder()
    .setTitle('Hex Arch Ref Example')
    .setDescription('Hex Arch Ref API description')
    .setVersion('1.0.0')
    .addTag('App')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(setupPort());
}
bootstrap();
