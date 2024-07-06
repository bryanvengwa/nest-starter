import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://bmvengwa:<password>@cluster0.8ftkdqj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')],
})
export class AppModule {}