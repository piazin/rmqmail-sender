import { Module } from '@nestjs/common';
import { EmailQueueModule } from './email-queue/email-queue.module';

@Module({
  imports: [EmailQueueModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
