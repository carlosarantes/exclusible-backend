import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ExchangeService } from './exchange.service';

@ApiTags('exchange')
@Controller('exchange')
export class ExchangeController {
  constructor(private readonly exchangeService: ExchangeService) {}

  @ApiBearerAuth()
  @Get()
  @UseGuards(AuthGuard('jwt'))
  async getExchangeRate() {
    return this.exchangeService.getExchangeRate();
  }
}
