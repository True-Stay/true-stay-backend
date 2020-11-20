import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { PORT } from './environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  Logger.log(`🚀 Server running on http://localhost:${PORT}`, 'Bootstrap');
}
bootstrap();
