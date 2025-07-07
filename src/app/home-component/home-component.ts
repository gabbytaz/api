import { Component, OnInit } from '@angular/core';
import { forumPost } from '../app';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeService } from '../home-service';

@Component({
  selector: 'app-home-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }
  forum: forumPost = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  };

  forums: forumPost[] = [];

  onSubmit(forum: forumPost) {
    console.log('Saved!!!');
    forum.userId = 1;
    forum.id = this.forums.length + 1;
    this.homeService.addForum(forum).subscribe(newForum => {
      this.forums.unshift(newForum);
      console.log('new add: '+newForum);
    });
  }

  ngOnInit() {
    this.homeService.getForums().subscribe(data => {
      this.forums = data;
      console.log('forums loaded:', data);
    })
  }

}
