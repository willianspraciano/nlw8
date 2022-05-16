import { prisma } from '../../prisma';
import {
  FeedbackCreateDate,
  FeedbacksRepository,
} from '../FeedbacksRepository';

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateDate) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
