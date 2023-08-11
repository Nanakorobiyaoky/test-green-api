import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateRowDto } from './dto/create-row.dto';
import { UpdateRowDto } from './dto/update-row.dto';
import { M1Service } from './m1.service';

@Controller('app')
export class M1Controller {
  constructor(private readonly m1Service: M1Service) {}

  @ApiOperation({ description: 'Get all rows from the database' })
  @ApiResponse({
    description: 'all rows from the database',
    type: String,
    status: HttpStatus.OK,
  })
  @Get()
  async getAllRows() {
    const pattern = 'getAllRows';
    return await this.m1Service.sendMessageM1(pattern, {});
  }

  @ApiOperation({ description: 'Get one row from the database by id' })
  @ApiResponse({
    description: 'one row from the database',
    type: String,
    status: HttpStatus.OK,
  })
  @Get(':id')
  async getOneRowById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Observable<string>> {
    const pattern = 'getOneRowById';
    return await this.m1Service.sendMessageM1(pattern, id);
  }

  @ApiOperation({ description: 'Create one row in the database by name' })
  @ApiResponse({
    description: 'one created row from the database',
    type: String,
    status: HttpStatus.CREATED,
  })
  @Post()
  async CreateNewRow(@Body() dto: CreateRowDto): Promise<Observable<string>> {
    const pattern = 'CreateNewRow';
    return await this.m1Service.sendMessageM1(pattern, dto);
  }

  @ApiOperation({ description: 'Update one row in the database by id' })
  @ApiResponse({
    description: 'one updated row from the database',
    type: String,
    status: HttpStatus.OK,
  })
  @Put()
  async UpdateOneRowById(
    @Body() dto: UpdateRowDto,
  ): Promise<Observable<string>> {
    const pattern = 'UpdateOneRowById';
    return await this.m1Service.sendMessageM1(pattern, dto);
  }

  @ApiOperation({ description: 'Delete one row in the database by id' })
  @ApiResponse({
    description: 'one deleted row from the database',
    type: String,
    status: HttpStatus.OK,
  })
  @Delete(':id')
  async DeleteRowById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Observable<string>> {
    const pattern = 'DeleteRowById';
    return await this.m1Service.sendMessageM1(pattern, id);
  }
}
