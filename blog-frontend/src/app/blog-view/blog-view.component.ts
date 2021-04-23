import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
})
export class BlogViewComponent implements OnInit {
  blogView;
  constructor(public router: Router, private blogService: BlogService) {
    const blogId = this.router.getCurrentNavigation().extras.state.id;

    this.blogService.getBlog(blogId).subscribe((data) => {
      console.log(data);
      this.blogView = data;
    });
  }

  ngOnInit(): void { }
}
