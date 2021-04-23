import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private httpClient: HttpClient) { }

  getBlog(blogId?: number) {
    const id = blogId ? blogId : '';
    return this.httpClient.get(`${environment.BASE_URL}${id}`);
  }
}
