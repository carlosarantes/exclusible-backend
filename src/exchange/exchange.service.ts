import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ExchangeService {
  constructor(private readonly httpService: HttpService) {}

  async getExchangeRate(): Promise<Record<string, unknown>> {
    const response = (await axios.get(
      process.env.COINMARKET_BASE_URL + 'exchange/info?slug=binance',
      {
        headers: {
          'X-CMC_PRO_API_KEY': process.env.COINMARKET_TOKEN,
          Accept: '*/*',
        },
        responseType: 'json',
        transformResponse: (data) => {
          return JSON.parse(data).data;
        },
      },
    )) as any;

    return response?.data;
  }
}
