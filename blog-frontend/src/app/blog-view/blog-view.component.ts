import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  blogView;
  constructor(public router: Router) {
    
    this.blogView = this.router.getCurrentNavigation().extras.state.data;
  }

  ngOnInit(): void {
  }

}
