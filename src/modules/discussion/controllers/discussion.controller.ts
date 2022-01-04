import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import {
  CreateDiscussionReqDto,
  QueryDiscussionAccountReqDto,
  QueryDiscussionAllReqDto,
} from '../dto/discussion.req.dto';
import {
  DiscussionListResDto,
  DiscussionResDto,
} from '../dto/discussion.res.dto';
import { DiscussionService } from '../services/discussion.service';
import { LikesService } from '../services/likes.service';

@Controller('/discussion')
export class DiscussionController {
  constructor(
    private readonly discussionService: DiscussionService,
    private readonly likesService: LikesService
  ) {}

  @Get('/stuff/:stuffId')
  async discussionByStuffId(
    @Param('stuffId', new ParseIntPipe()) stuffId: number
  ): Promise<DiscussionListResDto> {
    return await this.discussionService.discussionByStuffIdAndPage(
      stuffId,
      0,
      5
    );
  }

  @Post('/all')
  async discussions(
    @Body() reqDto: QueryDiscussionAllReqDto
  ): Promise<DiscussionListResDto> {
    const discussions: DiscussionListResDto =
      await this.discussionService.discussionByStuffIdAndPage(
        reqDto.stuffId,
        reqDto.pageNumber,
        reqDto.pageSize
      );

    console.log('discussions', discussions);

    await Promise.all(
      discussions.data.map(
        async (discussion: DiscussionResDto, index: number) => {
          discussions.data[index].likes = await this.likesService.likes(
            discussion.id,
            -1
          );
        }
      )
    );
    return discussions;
  }

  @Post('/account')
  async discussionsByAccount(
    @Body() reqDto: QueryDiscussionAccountReqDto
  ): Promise<DiscussionListResDto> {
    // todo
    return {
      data: [],
      total: 0,
      pageNumber: 0,
      pageSize: 0,
    };
  }

  @Post('/new')
  async createNew(@Body() reqDto: CreateDiscussionReqDto): Promise<string> {
    // todo
    return 'Success';
  }
}
