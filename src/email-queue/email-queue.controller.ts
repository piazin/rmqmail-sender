import { Controller, Post, Body} from '@nestjs/common';
import { EmailQueueService } from './email-queue.service';
import { CreateEmailQueueDto } from './dto/create-email-queue.dto';

@Controller('email-queue')
export class EmailQueueController {
  constructor(private readonly emailQueueService: EmailQueueService) {}

  @Post()
  create(@Body() createEmailQueueDto: CreateEmailQueueDto) {
    return this.emailQueueService.create(createEmailQueueDto);
  }
}
