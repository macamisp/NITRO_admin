import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Add HttpClientModule
import{News}from '../model/news';
@Component({
  selector: 'app-news',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule], // Add HttpClientModule here
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public news: News[] = [];
  public isLoading = false;
  public error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getnewnews();
  }

  getnewnews(): void {
    this.isLoading = true;
    this.http.get<News[]>('http://localhost:8080/orders/get-news')
      .subscribe({
        next: (data) => {
          console.log('Data received:', data);
          this.news = data;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error fetching news:', error);
          this.error = 'Failed to load news';
          this.isLoading = false;
        }
      });
  }
}
