import { IsString, IsDateString, IsNotEmpty, Min, Max ,IsISO8601} from 'class-validator';
export class CreateMovieDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsISO8601({ strict: false })
  publishingYear: string;
}
