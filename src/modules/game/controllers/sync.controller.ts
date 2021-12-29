import { Body, Controller, Post } from "@nestjs/common";
import { TxsReqDto } from "../dto/sync.req.dto";
import { TxsListResDto } from "../dto/sync.res.dto";

@Controller('/sync')
export class SyncController {
  constructor() {}

  @Post('/txs')
  async txs(@Body() reqDto: TxsReqDto): Promise<TxsListResDto> {
    // todo
    return {
      data: [],
      total: 0,
      pageNumber: 0,
      pageSize: 0
    };
  }
}