import { Controller, Get } from '@nestjs/common';
import { CategoryListResDto } from '../dto/category.res.dto';

@Controller('/categories')
export class CategoriesController {
  @Get('/get')
  async get(): Promise<CategoryListResDto> {
    // todo
    return {
      data: [],
      total: 0,
      pageNumber: 0,
      pageSize: 0,
    };
  }
}
