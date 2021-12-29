import { Body, Controller, Post } from "@nestjs/common";
import { VerifySwapReqDto } from "../dto/balance.req.dto";
import { VerifySwapResDto } from "../dto/balance.res.dto";

@Controller('/balance')
export class BalanceController {
  constructor() {}

  @Post('/verify-swap')
  async verify(@Body() reqDto: VerifySwapReqDto): Promise<VerifySwapResDto> {
    // todo
    return {
      r: '',
      s: '',
      v: 0
    };
  }
  
}