import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ExchangeController } from './exchange.controller';
import { ExchangeService } from './exchange.service';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  controllers: [ExchangeController],
  providers: [ExchangeService],
  exports: [ExchangeService],
})
export class ExchangeModule {}
