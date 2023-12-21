import { Module } from '@nestjs/common';

import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { pageModule } from './page/page.module';
import { pageEntity } from './page/page.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'itachi',
      password: '123456',
      database: 'akatsukiclan',
      entities: [pageEntity],
      synchronize: true,
    }),
    pageModule,
  ],

  providers: [AppService],
})
export class AppModule {}
