import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShortLink } from '../short-link.entity';

@Injectable()
export class ShortLinkService {
  constructor(
    @InjectRepository(ShortLink)
    private readonly shortLinkRepository: Repository<ShortLink>,
  ) {}

  async createShortLink(userId: number, longUrl: string): Promise<ShortLink> {
    // Implement short link creation logic
  }
}