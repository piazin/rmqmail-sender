import { Module } from '@nestjs/common';
import { EmailQueueModule } from './email-queue/email-queue.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    EmailQueueModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
