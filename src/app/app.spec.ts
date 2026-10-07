import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';

describe('Hotel Booking Application', () => {

  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App]
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create the hotel booking application', () => {
    expect(component).toBeTruthy();
  });

  it('should confirm booking when all details are filled', () => {
    component.customerName = 'Aswin';
    component.phone = '9876543210';
    component.roomType = 'Deluxe';
    component.checkIn = '2026-10-10';
    component.checkOut = '2026-10-12';

    component.confirmBooking();

    expect(component.booked).toBe(true);
  });

});