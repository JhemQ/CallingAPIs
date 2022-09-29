import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  allBlogs: any

  constructor(private api : BlogService, private router: Router,
     private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllBlogs();
  }

  editBlog(row : any){
    this.router.navigate(['/blog/update',{id:row.id, title:row.title, description:row.description, author:row.author, comments:row.comments}]);
    
  }

  deleteBlog(id: any){
    this.api.deleteBlog(id).subscribe(res=>{
      alert("Blog has been deleted");
      this.getAllBlogs()
    })
  }

  getAllBlogs(){
    this.api.getBlog().subscribe(res=>{
      this.allBlogs = res
    })
  }

  deleteAllBlogs(id:any){
    this.api.deleteBlog(id).subscribe(res=>{

    });
    setTimeout(function(){
      window.location.reload();
    }, 1000);
    this.getAllBlogs();
  }

}
