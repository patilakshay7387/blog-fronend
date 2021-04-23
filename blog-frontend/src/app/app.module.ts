import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule,Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home', pathMatch:'full'},
      {path:'blog-create',component:BlogCreateComponent},
      { path: 'blog-view', component: BlogViewComponent },




    ])
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
