import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  blogData;
  constructor(private blogApi: BlogService, public router: Router) { }

  ngOnInit(): void {
    this.blogApi.getBlog().subscribe((data: any) => {
      this.blogData = data;
    });
  }

  blogView(blogId) {
    this.router.navigate(['blog-view'], { state: { id: blogId } });
  }
}
