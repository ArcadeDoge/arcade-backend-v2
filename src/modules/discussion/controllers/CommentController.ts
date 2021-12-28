import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { CreateCommentReqDto } from "../dto/comment.req.dto";
import { CommentResDto } from "../dto/comment.res.dto";

@Controller('/comment')
export class CommentController {
  constructor() {}

  @Get('/id/:id')
  async commentById(@Param('id', new ParseIntPipe()) id: number): Promise<CommentResDto | undefined> {
    // todo
    return undefined;
  }

  @Post('/new')
  async createNew(@Body() reqDto: CreateCommentReqDto): Promise<string> {
    // todo
    return "Success";
  }
}