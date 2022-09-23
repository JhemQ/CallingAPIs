import { Injectable } from '@angular/core';
import { BlogInterface } from '../models/blog-interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogs: BlogInterface[] = [
    {
      id: 1,
      title: "Tier One",
      description: "Gaming",
      author: "Alodia",
      comments: ["Comment 1", "Comment 2", "Comment 3"]
    },
    {
      id: 2,
      title: "Crunchyroll",
      description: "Anime",
      author: "Unknown",
      comments: ["Comment 4", "Comment 5"]
    },
    {
      id: 3,
      title: "Dramacool",
      description: "Kdrama",
      author: "Koreans",
      comments: ["Comment 6", "Comment 7", "Comment 8", "Comment 9"]
    }
  ]

  constructor() { }

  getBlogs(){
    return this.blogs
  }
}
