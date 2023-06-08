import { Component, OnInit } from '@angular/core';
import { TestService } from './services/test.service';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  post:any;
  
  constructor(private service:TestService) {}
  
  ngOnInit() {
      this.service.getPosts()
        .subscribe(response => {
          this.post = response;
		  console.log(response)
		  
        });
  }
}