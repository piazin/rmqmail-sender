import { Module } from '@nestjs/common';
import { EmailQueueService } from './email-queue.service';
import { EmailQueueController } from './email-queue.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "EMAIL_QUEUE_SERVICE",
        transport: Transport.RMQ,
        options: {
          urls: ["amqp://localhost:5672"],
          queue: "purchase_confirmation_email_queue",
          queueOptions: {
            durable: false
          }
        }
      }
    ])
  ],
  controllers: [EmailQueueController],
  providers: [EmailQueueService],
})
export class EmailQueueModule {}
