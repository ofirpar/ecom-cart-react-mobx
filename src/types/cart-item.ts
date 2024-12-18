import { IProduct } from "./item";

export interface ICartItem extends IProduct {
  quantity: number;
}
