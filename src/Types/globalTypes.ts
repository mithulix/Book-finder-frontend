export interface IBooks {
  imageUrl: string | undefined;
  price: number;
  _id: number;
  author: string;
  comments: string[];
  genre: string;
  img: string;
  publicationDate: string;
  title: string;
  createdAt: string;
  quantity?: number;
  readingStatus?: boolean;
  readingComplete?: boolean;
}
