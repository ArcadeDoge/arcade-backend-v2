import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { StuffListResDto, StuffResDto } from "../dto/stuff.res.dto";
import { DiscussionService } from "../services/discussion.service";
import { StuffService } from "../services/stuff.service";

@Controller('/stuff')
export class StuffController {
  constructor(
    private readonly stuffService: StuffService,
    private readonly discussionService: DiscussionService
  ) {}

  @Get('/get/:id')
  async stuffById(@Param('id', new ParseIntPipe()) id: number): Promise<StuffResDto | undefined> {
    return await this.stuffService.stuffById(id);
  }

  @Get('/all')
  async stuffs(): Promise<StuffListResDto> {
    const list: StuffListResDto = await this.stuffService.stuffs();
    await Promise.all(list.data.map(async (stuff: StuffResDto, index: number) => {
      list.data[index].discussions = await this.discussionService.fillWithLikes(stuff.id);
    }));
    return list;
  }

  @Get('/search/:keyword')
  async stuffsBySearch(@Param('keyword') keyword: string): Promise<StuffListResDto> {
    const list: StuffListResDto = await this.stuffService.stuffs();
    await Promise.all(list.data.map(async (stuff: StuffResDto, index: number) => {
      const discussions = await this.discussionService.discussionByKeyword(stuff.id, 0, 3, keyword);
      list.data[index].discussions = discussions.data;
    }))
    return list;
  }
}