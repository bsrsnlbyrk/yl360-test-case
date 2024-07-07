export type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  coverImageUrl: string;
};

export type CartItem = {
  id: number;
  name: string;
  imagePath: string;
  quantity: number;
  price: number;
}
