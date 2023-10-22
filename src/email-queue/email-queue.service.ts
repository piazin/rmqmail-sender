import { Inject, Injectable } from '@nestjs/common';
import { EmailQueuePayloadDto } from './dto/email-queue-payload.dto';
import { ClientRMQ } from '@nestjs/microservices';

@Injectable()
export class EmailQueueService {
  constructor(@Inject('EMAIL_QUEUE_SERVICE') private emailClient: ClientRMQ) {}

  submitToQueue(emailQueuePayloadDto: EmailQueuePayloadDto) {
    try {
      this.emailClient.emit('purchase_confirmation_email_queue', emailQueuePayloadDto);

      return {
        message: 'Email sent successfully',
      }
    } catch (error) {
      return {
        message: 'Error sending email',
        error
      }
    }
  }
}
