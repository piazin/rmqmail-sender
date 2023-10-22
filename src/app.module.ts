import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailQueueModule } from './email-queue/email-queue.module';

@Module({
  imports: [EmailQueueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
