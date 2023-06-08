import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  message: string;

  constructor(private http: HttpClient) {
    this.getMessage();
  }

  getMessage() {
    this.http.get('http://your-flask-backend-url/api').subscribe((response: any) => {
      this.message = response.message;
    });
  }
}
