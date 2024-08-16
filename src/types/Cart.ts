export interface Product {
  id: number;
  colour: string;
  name: string;
  price: number;
  img: string;
}

export interface CartItem {
  product: Product;
  qty: number;
}

export type Cart = CartItem[];
