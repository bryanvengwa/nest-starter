import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://bmvengwa:rNaEui1MdTeswaHt@nest-starter-cluster.7kpsbfq.mongodb.net/'), UsersModule],
})
export class AppModule {}