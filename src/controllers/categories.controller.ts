import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dtos/category.dtos';
import { CategoriesService } from 'src/services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesServices: CategoriesService) {}

  @Get()
  getCategories() {
    return this.categoriesServices.findAll();
  }

  @Get(':categoryId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('categoryId', ParseIntPipe) categoryId: number) {
    return this.categoriesServices.findOne(categoryId);
  }

  @Post()
  create(@Body() payload: CreateCategoryDto) {
    return this.categoriesServices.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateCategoryDto) {
    return this.categoriesServices.update(+id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesServices.remove(+id);
  }
}
