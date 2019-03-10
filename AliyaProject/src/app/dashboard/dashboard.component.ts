import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  html: string = "http://www.mocky.io/v2/5c78c2c2300000a42d49af74";
  css : string = " http://www.mocky.io/v2/5c78d0c8300000a42d49afa8";
  bootstrap : string =" http://www.mocky.io/v2/5c7a9cb74900006a27a5a771";
  js : string ="http://www.mocky.io/v2/5c7aa1bc490000c234a5a779";

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }
  htmllink: string;
  csslink: string;
  bootstraplink : string;
  jslink : string;
  response: any;
  response2: any;

  htmlCourse(){
    this.http.get(this.html).subscribe (e => this.response = JSON.stringify(e));
    this.htmllink = "OK";
    return false;
  }

  cssCourse(){
    this.http.get(this.css).subscribe (e => this.response2 = JSON.stringify(e));
    this.csslink = "OK";
    return false;
  }
  bootstrapCourse(){
    this.http.get(this.bootstrap).subscribe (e => this.response = JSON.stringify(e));
    this.bootstraplink = "OK";
    return false;
  }
  jsCourse(){
    this.http.get(this.js).subscribe (e => this.response = JSON.stringify(e));
    this.jslink = "OK";
    return false;
  }
}
