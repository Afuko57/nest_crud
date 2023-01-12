import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { RequestInvoiceitemModule } from './request_invoiceitem/request_invoiceitem.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '34.101.134.120',
      port: 3306,
      username: 'root',
      password: 'RjrQ6=MGNzHG"lqe',
      database: 'shop',
      // entities: [`'dist/**/*.entity{.ts,.js}'`],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    RequestInvoiceitemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
