import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class FormsPage extends BasePage {
  // Booking Form (Contact Page)
  readonly bookingName: Locator;
  readonly bookingPhone: Locator;
  readonly bookingDate: Locator;
  readonly bookingTime: Locator;
  readonly bookingSubmit: Locator;
  readonly bookingSuccess: Locator;

  // Enquiry Form
  readonly enqName: Locator;
  readonly enqEmail: Locator;
  readonly enqPhone: Locator;
  readonly enqService: Locator;
  readonly enqMessage: Locator;
  readonly enqSubmit: Locator;
  readonly enqSuccess: Locator;

  constructor(page: Page) {
    super(page);
    
    // Booking Form - Using Accessible Locators
    this.bookingName = page.getByLabel('Patient Full Name');
    this.bookingPhone = page.getByLabel('Phone Number');
    this.bookingDate = page.getByLabel('Preferred Date');
    this.bookingTime = page.getByLabel('Preferred Time Slot');
    this.bookingSubmit = page.getByRole('button', { name: /Confirm Booking Request/i });
    this.bookingSuccess = page.locator('.success-message');

    // Enquiry Form - Using Accessible Locators (assumes labels exist or uses placeholders as fallback)
    this.enqName = page.getByPlaceholder(/Full Name/i).or(page.locator('#enq-name'));
    this.enqEmail = page.getByPlaceholder(/Email Address/i).or(page.locator('#enq-email'));
    this.enqPhone = page.getByPlaceholder(/Phone Number/i).or(page.locator('#enq-phone'));
    this.enqService = page.locator('#enq-service'); // Select dropdowns usually need IDs or explicit labels
    this.enqMessage = page.getByPlaceholder(/Message/i).or(page.locator('#enq-message'));
    this.enqSubmit = page.getByRole('button', { name: /Submit Detailed Enquiry/i });
    this.enqSuccess = page.locator('.success-banner');
  }

  async submitBooking(name: string, phone: string, date: string, time: string) {
    await this.bookingName.fill(name);
    await this.bookingPhone.fill(phone);
    await this.bookingDate.fill(date);
    await this.bookingTime.selectOption(time);
    await this.bookingSubmit.click();
  }

  async verifyBookingSuccess() {
    await expect(this.bookingSuccess).toBeVisible();
    await expect(this.bookingSuccess).toContainText(/Appointment Request Received/i);
  }

  async submitEnquiry(name: string, email: string, phone: string, service: string, message: string) {
    await this.enqName.fill(name);
    await this.enqEmail.fill(email);
    await this.enqPhone.fill(phone);
    this.enqService.selectOption(service);
    await this.enqMessage.fill(message);
    await this.enqSubmit.click();
  }

  async verifyEnquirySuccess() {
    await expect(this.enqSuccess).toBeVisible();
    await expect(this.enqSuccess).toContainText(/Enquiry Successfully Received/i);
  }
}
