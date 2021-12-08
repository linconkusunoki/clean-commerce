import { Product } from '../entities/product'

export interface GetProduct {
  execute(id: string): Promise<Product>
}
