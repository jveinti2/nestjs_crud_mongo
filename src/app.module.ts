import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProductModule } from './product/product.module'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot(
      'mongodb+srv://root:1234@cluster0.anjd6ly.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
