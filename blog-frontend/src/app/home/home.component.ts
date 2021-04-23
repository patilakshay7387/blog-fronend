import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../app.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  blogData;
  constructor(private blogApi: BlogService, public router: Router) { }

  ngOnInit(): void {
    this.blogApi.getBlog().subscribe((data: Blog) => {
      this.blogData = data;
    });
  }

  blogView(blogId: number) {
    console.log("blogView")
    this.router.navigate(['blog-view'], { state: { id: blogId } });
  }

  getTagColor(tagList: string, colorCode: any) {
    // console.log(tagList, colorCode.name);
    if (colorCode?.name == null) {
      return
    }
    if (tagList === colorCode.name) {
      return `background-color:${colorCode.bg_color_hex}; color : ${colorCode.text_color_hex}`
    } else {
      return "color:grey;"
    }
  }
}
