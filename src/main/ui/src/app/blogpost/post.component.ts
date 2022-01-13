import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPost, Post } from './post';

@Component({
  selector: 'blogpost',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit
{
  @Input() post: Post

  // readonly currentPost$ = new BehaviorSubject(new Post()) 
  // readonly currentPost$ = new BehaviorSubject(new Post())
  currentPost: Post

  constructor()
  {
    
  }

  ngOnInit(): void
  {
    this.currentPost = Post.Build(this.post)
  }

  ngOnChanges(changes: SimpleChange): void
  {
    // this.currentPost$.next(Post.Build(changes.currentValue.post))
  }

}
