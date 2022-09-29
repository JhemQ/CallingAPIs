import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { BlogModel } from '../blog-form/BlogModel';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.scss']
})
export class UpdateBlogComponent implements OnInit {

  blogForm: FormGroup
  comments: FormArray
  blog:any
  blogObject : BlogModel = new BlogModel()

  constructor(private fb:FormBuilder, private api : BlogService, 
    private route:ActivatedRoute, private router:Router) { 
    this.blogForm = this.fb.group({
      title: '',
      description: '',
      author: '',
      comments: ''
    });
    this.comments = this.blogForm.get('comments') as FormArray
  
  }

  ngOnInit(): void {
    this.blog = this.route.snapshot.params;
    this.blogObject.id = this.blog.id
    this.blogForm.controls['title'].setValue(this.blog.title)
    this.blogForm.controls['description'].setValue(this.blog.description)
    this.blogForm.controls['author'].setValue(this.blog.author)
    this.blogForm.controls['comments'].setValue(this.blog.comments)
  }

  updateBlogDetails(){
    this.blogObject.title = this.blogForm.value.title;
    this.blogObject.description = this.blogForm.value.description;
    this.blogObject.author = this.blogForm.value.author;
    this.blogObject.comments = this.blogForm.value.comments;

    this.api.updateBlog(this.blogObject, this.blogObject.id)
    .subscribe(res=>{
      alert("Successfully updated a book");
      this.blogForm.reset()
      this.router.navigate(['blog'])
    },
    err=>{
      alert("Something went wrong");
    })
  }

}
