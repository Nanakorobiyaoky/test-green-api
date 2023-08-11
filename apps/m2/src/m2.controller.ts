import { Controller } from '@nestjs/common';
import { M2Service } from './m2.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UpdateRowDto } from './dto/update-row.dto';
import { CreateRowDto } from './dto/create-row.dto';

@Controller()
export class M2Controller {
  constructor(private readonly m2Service: M2Service) {}

  @MessagePattern('getAllRows')
  async getAllRows(): Promise<string> {
    return await this.m2Service.getAllRows();
  }

  @MessagePattern('getOneRowById')
  async getOneRowById(@Payload() id: number): Promise<string> {
    return await this.m2Service.getOneRowById(id);
  }

  @MessagePattern('CreateNewRow')
  async CreateNewRow(@Payload() dto: CreateRowDto): Promise<string> {
    return await this.m2Service.CreateNewRow(dto);
  }

  @MessagePattern('UpdateOneRowById')
  async UpdateOneRowById(@Payload() dto: UpdateRowDto): Promise<string> {
    return await this.m2Service.UpdateOneRowById(dto);
  }

  @MessagePattern('DeleteRowById')
  async DeleteRowById(@Payload() id: number): Promise<string> {
    return await this.m2Service.DeleteRowById(id);
  }
}
