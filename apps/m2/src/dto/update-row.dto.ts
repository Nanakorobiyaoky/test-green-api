import { CreateRowDto } from './create-row.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateRowDto extends CreateRowDto {
  @ApiProperty({ type: Number, example: 1, description: 'unique row id' })
  id: number;
}
