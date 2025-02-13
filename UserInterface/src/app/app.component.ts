import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  httpClient= inject(HttpClient);
  title = 'UserInterface';
  users : any;
  ngOnInit(): void {
    this.httpClient.get('http://localhost:5134/api/User').subscribe({
      next: Response => {this.users=Response},
      error: error => {console.log('Error')} ,
      complete: () => {console.log('Request completed')}
    })
  }
}
