import { Schema } from 'mongoose'

export const ProductSchema = new Schema({
  name: String,
  description: String,
  imgUrl: String,
  price: Number,
  createAt: { type: Date, default: Date.now },
})
