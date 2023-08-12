import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  discountRate: number;

  @ApiProperty()
  coverImage: string;

  @ApiProperty()
  price: number;
}
