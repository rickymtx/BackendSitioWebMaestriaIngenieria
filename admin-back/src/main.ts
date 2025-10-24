import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(3000);
  app.enableCors(); //habilitar CORS
  console.log('🚀 Backend corriendo en http://localhost:3000');
}
bootstrap();