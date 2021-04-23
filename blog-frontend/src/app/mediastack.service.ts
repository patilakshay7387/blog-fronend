import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MediastackService {

  constructor(private httpClient: HttpClient) {


  }

  getBlog() {
    return this.httpClient.get(`${environment.BASE_URL}news?access_key=${environment.ACCESS_KEY}&languages=en`);
  }
}
