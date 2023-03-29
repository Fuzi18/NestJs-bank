import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './account.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Owner } from './owner.entity';
import { AccountModule } from './account/account.module';
import { OwnerModule } from './owner/owner.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '',
      database: 'bank',
      entities: [Account, Owner],
      synchronize: true,
    }),
    AccountModule,
    OwnerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
