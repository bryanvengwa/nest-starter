import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://bmvengwa:rNaEui1MdTeswaHt@nest-starter-cluster.7kpsbfq.mongodb.net/',
    ),
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env.production'],
      isGlobal: true,
      // load: [configuration],
    }),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
