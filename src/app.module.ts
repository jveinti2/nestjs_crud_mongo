import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProductModule } from './product/product.module'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost/nest'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
