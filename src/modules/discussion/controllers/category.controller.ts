import { Body, Controller, Get, Post } from "@nestjs/common";
import { CategoryListResDto } from "../dto/category.res.dto";
import { GetLikesReqDto, SetLikesReqDto } from "../dto/likes.req.dto";

@Controller('/categories')
export class CategoriesController {
  constructor() {}

  @Get('/get')
  async get(): Promise<CategoryListResDto> {
    // todo
    return {
      data: [],
      total: 0,
      pageNumber: 0,
      pageSize: 0
    }
  }
}