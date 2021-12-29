import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { ItemListResDto, ItemResDto } from "src/modules/market/dto/items.res.dto";
import { MarketItemReqDto, UploadMaterialDto } from "../dto/items.req.dto";

@Controller('/item')
export class ItemController {
  constructor() {}

  @Post('/address/:address')
  async itemsByAddress(@Param('address') address: string): Promise<ItemListResDto> {
    // todo
    return {
      data: [],
      total: 0,
      pageSize: 0,
      pageNumber: 0
    };
  }

  @Post('/market')
  async marketItems(@Body() reqDto: MarketItemReqDto): Promise<ItemListResDto> {
    // todo
    return {
      data: [],
      total: 0,
      pageSize: 0,
      pageNumber: 0
    };
  }

  @Get('/id/:id')
  async itemById(@Param('id', new ParseIntPipe()) id: number): Promise<ItemResDto> {
    // todo
    return {
    }
  }

  @Patch('/id/:id')
  async patchById(@Param('id', new ParseIntPipe()) id: number): Promise<string> {
    // todo
    return "SUCCESS";
  }

  @Get('/tokenId/:tokenId')
  async itemByTokenId(@Param('tokenId', new ParseIntPipe()) tokenId: number): Promise<ItemResDto> {
    // todo
    return {}
  }

  @Post('/upload-material')
  async uploadMaterial(@Body() reqDto: UploadMaterialDto): Promise<string> {
    // todo
    return "SUCCESS";
  }
}

