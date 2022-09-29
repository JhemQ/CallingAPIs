import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  postBlog(data : any){
    return this.http.post<any>("http://localhost:3000/blog", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getBlog(){
    return this.http.get<any>("http://localhost:3000/blog")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateBlog(data : any, id: number){
    return this.http.put<any>("http://localhost:3000/blog/"+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteBlog(id: number){
    return this.http.delete<any>("http://localhost:3000/blog/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
