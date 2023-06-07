export interface IProduct {
  id: number;
  title: string;
  quantity?: number;
  price: number;
  image?: string;
  categoryId: number;
  category: string;
  purchaseDate?: Date;
  description: string;
}
