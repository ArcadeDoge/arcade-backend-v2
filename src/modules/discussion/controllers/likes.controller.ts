import { Body, Controller, Post } from '@nestjs/common';
import { GetLikesReqDto, SetLikesReqDto } from '../dto/likes.req.dto';

@Controller('/likes')
export class LikesController {
  @Post('/get')
  async get(@Body() reqDto: GetLikesReqDto): Promise<string> {
    // todo
    return undefined;
  }

  @Post('/set')
  async set(@Body() reqDto: SetLikesReqDto): Promise<string> {
    // todo
    return undefined;
  }
}
