import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']

})
export class FeedbackComponent {
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
