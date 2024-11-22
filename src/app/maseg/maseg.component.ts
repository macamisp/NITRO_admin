import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-maseg',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './maseg.component.html',
  styleUrl: './maseg.component.css'
})
export class MasegComponent {
  public feedback: any = {
    name: '',
    email: '',
    details: ''
  };

  constructor(private http: HttpClient) {}

  public addFeedback() {
  if (this.feedback.name && this.feedback.email && this.feedback.details) {
    const payload = {
      name: this.feedback.name,
      email: this.feedback.email,
      details: this.feedback.details,

    };

    this.http.post('http://localhost:8080/orders/add-feedback', payload).subscribe({
      next: (response) => {
        alert('feedback added successfully!');
        this.clearForm();
      },
      error: (err) => {
        console.error(err);
        alert('Failed to add feedback. Please try again.');
      }
    });
  } else {
    alert('Please fill all fields correctly.');
  }
}
  private clearForm() {
    this.feedback = { name: '', email: '', details: '' };
  }
}

