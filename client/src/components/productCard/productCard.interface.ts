export interface ProductInterface {
    images: any[],
    category: string,
    brand?: string,
    name: string,
    price: number,
    salePrice?: number,
    tags?: string[],
}