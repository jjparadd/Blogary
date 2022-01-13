import { Component, OnInit } from '@angular/core';
import { Author, Post, PostInfo } from '../blogpost/post';
import {UiTestData} from '../ui-test-data'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{
  readonly staticPost : Post = UiTestData.buildTestPosts()[0];
  readonly staticPost2 = UiTestData.posts[1];

  constructor()
  {

  }

  ngOnInit(): void
  {
  }

}
