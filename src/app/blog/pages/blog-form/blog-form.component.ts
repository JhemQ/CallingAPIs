import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { BlogModel } from './BlogModel';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {

  blogForm: FormGroup;
  comments: FormArray
  blog:any

  blogObject : BlogModel = new BlogModel()

  constructor(private fb:FormBuilder, private api : BlogService, 
    private route:ActivatedRoute, private router:Router) { 
    this.blogForm = this.fb.group({
      id: '',
      title: ['', Validators.required],
      description: ['', Validators.required],
      author: ['', Validators.required],
      comments: fb.array([])
    });
    this.comments = this.blogForm.get('comments') as FormArray
  
  }
  
  ngOnInit(): void {
    this.comments.push(new FormControl())
  }

  get title(){
    return this.blogForm.get('title');
  }

  get description(){
    return this.blogForm.get('description');
  }

  get author(){
    return this.blogForm.get('author');
  }

  addComment(){
    this.comments.push(new FormControl())
  }

  deleteComment(i:number){
    this.comments.removeAt(i)
  }

  submit(form: FormGroup){
    console.log('id', form.value.id);
    console.log('title', form.value.title);
    console.log('description', form.value.description);
    console.log('author', form.value.author);
    console.log('comments', form.value.comments);
  }

  postBlogDetails(){
    //this.bookObject.id = this.bookForm.value.id;
    this.blogObject.title = this.blogForm.value.title;
    this.blogObject.description = this.blogForm.value.description;
    this.blogObject.author = this.blogForm.value.author;
    this.blogObject.comments = this.blogForm.value.comments;


    this.api.postBlog(this.blogObject)
    .subscribe(res=>{
      console.log(res);
      alert("Successfully added a Blog");
      this.blogForm.reset()
      this.router.navigate(['blog'])
    },
    err=>{
      alert("Something went wrong");
    })
  }

}
