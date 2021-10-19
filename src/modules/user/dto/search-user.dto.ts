import { BaseQueryParametersDto } from "src/shared/dto/base-query-parameters.dto";


export class SearchUserDto extends BaseQueryParametersDto {
  field?: string;
  value?: string;
}
