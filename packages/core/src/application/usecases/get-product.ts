import { Product } from '../../domain/entities/product'
import { GetProduct } from '../../domain/usecases/get-product'

export class GetProductUseCase implements GetProduct {
  async execute(id: string): Promise<Product> {
    console.log('core', id)
    return {
      name: 'first product',
      price: 10,
    }
  }
}
