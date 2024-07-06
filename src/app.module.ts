import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://bmvengwa:rNaEui1MdTeswaHt@nest-starter-cluster.7kpsbfq.mongodb.net/')],
})
export class AppModule {}