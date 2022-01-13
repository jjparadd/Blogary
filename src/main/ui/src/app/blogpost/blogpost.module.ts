import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { Post } from './post';


@NgModule({
  declarations: [
    PostComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostComponent,
  ]
})
export class BlogpostModule { }
