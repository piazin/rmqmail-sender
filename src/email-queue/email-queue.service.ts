import { Injectable } from '@nestjs/common';
import { CreateEmailQueueDto } from './dto/create-email-queue.dto';

@Injectable()
export class EmailQueueService {
  create(createEmailQueueDto: CreateEmailQueueDto) {
    return 'This action adds a new emailQueue';
  }
}
