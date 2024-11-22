import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../model/item';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gass',
  templateUrl: './gass.component.html',
  styleUrls: ['./gass.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class GassComponent implements OnInit {
  public items: Item[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getGassItems();
    console.log("Test");

  }

  getGassItems(): void {
    this.http.get<Item[]>('http://localhost:8080/orders/get-item')
      .subscribe(
        data => {
          console.log("Inside");

          console.log(data);
          this.items = data;

        },
        error => {
          console.error('Error fetching gas items:', error);
        }
      );
  }

  setItemDetails(item: any) {

  }

  openCartModal(item: any) {

  }
}
