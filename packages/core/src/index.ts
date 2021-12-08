import { GetProductUseCase } from './application/usecases/get-product'

export * from './domain/entities/product'

export const product = {
  async getById(id: string) {
    const getProduct = new GetProductUseCase()
    return getProduct.execute(id)
  },
}
