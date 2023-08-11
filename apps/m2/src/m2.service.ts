import { Injectable } from '@nestjs/common';

@Injectable()
export class M2Service {
  async getAllRows(): Promise<string> {
    return 'This response contain all rows from the database';
  }

  async getOneRowById(id: number): Promise<string> {
    return `This response contain one row with id: ${id}`;
  }

  async CreateNewRow(dto: { name: string }): Promise<string> {
    return `This response contain one created row with name: ${dto.name}`;
  }

  async UpdateOneRowById(dto: { name: string; id: number }): Promise<string> {
    return `This response contain one updated row with name: ${dto.name} and id: ${dto.id}`;
  }

  async DeleteRowById(id: number): Promise<string> {
    return `This response contain one deleted row with id: ${id}`;
  }
}
