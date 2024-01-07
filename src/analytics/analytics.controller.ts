import { Controller, Get, Param, UseGuards, Request } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get(':shortLinkId')
  @UseGuards(JwtAuthGuard)
  async getAnalytics(@Request() req, @Param('shortLinkId') shortLinkId: number) {
    return this.analyticsService.getAnalytics(shortLinkId);
  }
}