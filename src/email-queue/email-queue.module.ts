import { Module } from '@nestjs/common';
import { EmailQueueService } from './email-queue.service';
import { EmailQueueController } from './email-queue.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'EMAIL_QUEUE_SERVICE',
        useFactory: (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [configService.get<string>('RABBITMQ_URL')],
            noAck: true,
            queue: 'purchase_confirmation_email_queue',
            queueOptions: {
              durable: false,
            },
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [EmailQueueController],
  providers: [EmailQueueService],
})
export class EmailQueueModule {}
