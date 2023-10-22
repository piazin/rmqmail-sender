import { Controller, Post, Body} from '@nestjs/common';
import { EmailQueueService } from './email-queue.service';
import { EmailQueuePayloadDto } from './dto/email-queue-payload.dto';

@Controller('email-queue')
export class EmailQueueController {
  constructor(private readonly emailQueueService: EmailQueueService) {}

  @Post()
  submitToQueue(@Body() emailQueuePayloadDto: EmailQueuePayloadDto) {
    return this.emailQueueService.submitToQueue(emailQueuePayloadDto);
  }
}
