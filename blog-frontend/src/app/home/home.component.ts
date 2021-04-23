import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MediastackService } from '../mediastack.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogData;
  constructor(private blogApi: MediastackService, public router: Router) { }

  ngOnInit(): void {
    this.blogApi.getBlog().subscribe((data: any) => {
      console.log(data.data);
      this.blogData = data.data;

    })
  }

  blogView(blog) {
    console.log(blog);
    this.router.navigate(['blog-view'], { state: { data: blog } })

  }

}
