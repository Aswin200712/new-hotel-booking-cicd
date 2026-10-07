import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  customerName = '';
  phone = '';
  roomType = '';
  checkIn = '';
  checkOut = '';

  booked = false;

  confirmBooking() {
    if (this.customerName && this.phone && this.roomType &&
        this.checkIn && this.checkOut) {
      this.booked = true;
    } else {
      this.booked = false;
      alert('Please fill all the details');
    }
  }
}