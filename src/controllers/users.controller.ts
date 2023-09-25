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
import { CreateUserDto, UpdateUserDto } from 'src/dtos/user.dtos';
import { UserService } from 'src/services/user.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UserService) {}

  @Get()
  getUsers() {
    return this.usersService.findAll();
  }

  @Get(':usersId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('usersId', ParseIntPipe) usersId: number) {
    return this.usersService.findOne(usersId);
  }

  @Post()
  create(@Body() payload: CreateUserDto) {
    return this.usersService.create(payload);
  }

  @Put()
  update(@Param('id') id: number, @Body() payload: UpdateUserDto) {
    return this.usersService.update(+id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
