import { QueryListResDto } from "src/dto/query.list.res.dto";
import { QueryResDto } from "src/dto/query.res.dto";

export class CategoryResDto extends QueryResDto {

}

export class CategoryListResDto extends QueryListResDto<CategoryResDto> {
  constructor(pageSize: number, pageNumber: number, data: CategoryResDto[]) {
    super(pageSize, pageNumber, data);
  }
}