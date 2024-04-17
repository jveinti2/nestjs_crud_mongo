import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Product } from './interfaces/product'
import { CreateProductDto } from './dto/product.dto'

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

  async getProducts(): Promise<Product[]> {
    const products = await this.productModel.find()
    return products
  }

  async getProduct(productId: string): Promise<Product> {
    const product = await this.productModel.findById(productId)
    return product
  }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const product = new this.productModel(createProductDto)
    await product.save()
    return product
  }

  async deleteProduct(productId: string): Promise<Product> {
    const deleteProduct = await this.productModel.findByIdAndDelete(productId)
    return deleteProduct
  }

  async updateProduct(productId: string, createProductDto: CreateProductDto): Promise<Product> {
    const updateProduct = await this.productModel.findByIdAndUpdate(productId, createProductDto, {
      new: true,
    })
    return updateProduct
  }
}
