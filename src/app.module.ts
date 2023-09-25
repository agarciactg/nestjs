import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/categories.service';
import { BrandsService } from './services/brands.service';
import { BrandsController } from './controllers/brands.controller';
import { UserService } from './services/user.service';
import { UsersController } from './controllers/users.controller';
import { CustomersService } from './services/customers.service';
import { CustomerController } from './controllers/customers.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    ProductsController,
    CategoriesController,
    BrandsController,
    UsersController,
    CustomerController,
  ],
  providers: [
    AppService,
    ProductsService,
    CategoriesService,
    BrandsService,
    UserService,
    CustomersService,
  ],
})
export class AppModule {}
