export type ProductType =  {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    originalPrice: number; 
    saleOffPrice: number;
    description: string;
    quantity?: number;
}