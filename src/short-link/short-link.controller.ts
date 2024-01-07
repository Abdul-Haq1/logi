import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { ShortLinkService } from './short-link.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('short-link')
export class ShortLinkController {
  constructor(private readonly shortLinkService: ShortLinkService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createShortLink(@Request() req, @Body() createShortLinkDto: any) {
    const userId = req.user.id;
    return this.shortLinkService.createShortLink(userId, createShortLinkDto.longUrl);
  }
}