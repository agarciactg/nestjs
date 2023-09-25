import { Injectable, NotFoundException } from '@nestjs/common';

import { Brand } from '../entities/brands.entity';
import { CreateBrandDto, UpdateBrandDto } from 'src/dtos/branch.dtos';

@Injectable()
export class BrandsService {
  private counterId = 0;
  private branchs: Brand[] = [];

  findAll() {
    return this.branchs;
  }

  findOne(id: number) {
    const branch = this.branchs.find((item) => item.id === id);
    if (!branch) {
      throw new NotFoundException(`Branch #${id} not found`);
    }
    return branch;
  }

  create(payload: CreateBrandDto) {
    this.counterId += 1;
    const newBrand = {
      id: this.counterId,
      ...payload,
    };
    this.branchs.push(newBrand);
    return newBrand;
  }

  update(id: number, payload: UpdateBrandDto) {
    const brand = this.findOne(id);
    const index = this.branchs.findIndex((item) => item.id === id);
    this.branchs[index] = {
      ...brand,
      ...payload,
    };
    return this.branchs[index];
  }

  remove(id: number) {
    const index = this.branchs.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    this.branchs.splice(index, 1);
    return true;
  }
}
