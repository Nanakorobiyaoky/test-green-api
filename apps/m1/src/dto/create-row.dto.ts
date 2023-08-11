import { ApiProperty } from '@nestjs/swagger';

export class CreateRowDto {
  @ApiProperty({
    type: String,
    example: 'name',
    description: 'parameter to create row',
  })
  name: string;
}
