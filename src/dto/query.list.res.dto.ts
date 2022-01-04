export class QueryListResDto<T> {
  data: T[];

  total: number;

  pageSize: number;

  pageNumber: number;

  constructor(pageSize: number, pageNumber: number, data: T[]) {
    this.pageSize = pageSize;
    this.pageNumber = pageNumber;
    this.data = data;
  }
}
