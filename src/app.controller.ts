import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Account } from './account.entity';
import { AppService } from './app.service';
import { Owner } from './owner.entity';
import accountDto from './account.dto';
import ownerDto from './owner.dto';
import { Delete } from '@nestjs/common';
import { Param } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Get('/account')
  async listAccount() {
    const repo = this.dataSource.getRepository(Account);
    return await repo.find();
  }

  @Get('/owner')
  async listOwner() {
    const repo = this.dataSource.getRepository(Owner);
    return await repo.find();
  }

  @Post('/account')
  async postAccount(@Body() account: accountDto) {
    const Repo = this.dataSource.getRepository(Account);
    await Repo.save(account);
  }

  @Post('/owner')
  async postOwner(@Body() owner: ownerDto) {
    const Repo = this.dataSource.getRepository(Owner);
    await Repo.save(owner);
  }

  @Delete('/account/:id')
  async deleteAccount(@Param('id') id: number) {
    const Repo = this.dataSource.getRepository(Account);
    await Repo.delete(id);
  }

  @Delete('/owner/:id')
  async deleteOwner(@Param('id') id: number) {
    const Repo = this.dataSource.getRepository(Owner);
    await Repo.delete(id);
  }
}
