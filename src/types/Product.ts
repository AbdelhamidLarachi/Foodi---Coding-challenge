

export enum ProductCategory {
  Outdoor = "Outdoor",
  Indoor = "Indoor",
  BigPlants = "Big Plants",
  LittlePlants = "Little Plants",
  Other = "Other",
}

export default interface IProduct {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  img: any;
  useDiscount: Function;
  quantity: number;
  total?: number;
  give?: number;
  discount: number;
}
