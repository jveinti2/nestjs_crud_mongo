import { Controller, Get, Post, Delete, Res, HttpStatus, Body, Param, Query } from '@nestjs/common'
import { CreateProductDto } from './dto/product.dto'
import { ProductService } from './product.service'

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('/create')
  async createProduct(@Res() res, @Body() createProductDto: CreateProductDto) {
    const product = await this.productService.createProduct(createProductDto)
    res.status(HttpStatus.OK).json({
      message: 'Product Successfully Created',
      product,
    })
  }

  @Get()
  async getProducts(@Res() res) {
    const products = await this.productService.getProducts()
    res.status(HttpStatus.OK).json({
      message: 'List of Products',
      products,
    })
  }

  @Get('/:productId')
  async getProduct(@Res() res, @Param('productId') productId) {
    const product = await this.productService.getProduct(productId)
    res.status(HttpStatus.OK).json({
      message: 'Product Detail',
      product,
    })
  }

  @Delete('/delete')
  async deleteProduct(@Res() res, @Query('productId') productId) {
    const product = await this.productService.deleteProduct(productId)
    res.status(HttpStatus.OK).json({
      message: 'Product Deleted',
      product,
    })
  }

  @Post('/update')
  async updateProduct(@Res() res, @Body() createProductDto: CreateProductDto, productId: string) {
    const product = await this.productService.updateProduct(productId, createProductDto)
    res.status(HttpStatus.OK).json({
      message: 'Product Updated',
      product,
    })
  }
}
