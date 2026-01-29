import { Category } from '../../category/models/category.model';

export interface AddBlogPostRequest {
  title: string;
  shortDescription: string;
  content: string;
  author: string;
  featuredImageUrl: string;
  urlHandle: string;
  publishedDate: Date;
  isVisible: boolean;
  categories: string[];
}

export interface UpdateBlogPostRequest {
  title: string;
  shortDescription: string;
  content: string;
  author: string;
  featuredImageUrl: string;
  urlHandle: string;
  publishedDate: Date;
  isVisible: boolean;
  categories: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  author: string;
  featuredImageUrl: string;
  urlHandle: string;
  publishedDate: string;
  isVisible: boolean;
  categories: Category[];
}
