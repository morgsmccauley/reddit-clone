export interface IImage {
  url: string;
  width: number;
  height: number;
}

export interface IPost {
  title: string;
  id: string;
  author: string;
  totalComments: number;
  score: number;
  image?: IImage;
}
