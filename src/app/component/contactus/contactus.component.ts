import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  contactus = {
    name: '',
    email: '',
    phoneNumber: '',
    msj: ''
  }
  url = "https://script.google.com/macros/s/AKfycbxFIAyc3R5sRMf_8m5Mi5M21NToZH2jgQ-jRJ1TLygjvlas4luq7C2XX5QJCQtQrCDwAA/exec";
  submitting: boolean = false;

  submit(): void {

    if (this.submitting) {
      return;
    }
    if (!this.validateForm()) {
      return;
    }
    console.log(this.contactus);
    const dataurl = `?name=${encodeURIComponent(this.contactus.name)}&email=${encodeURIComponent(this.contactus.email)}&phoneNumber=${encodeURIComponent(this.contactus.phoneNumber)}&message=${encodeURIComponent(this.contactus.msj)}`;



    this.submitting = true;
    fetch(this.url + dataurl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    }).then(res => {
      return res.text()
    }).then(data => {
      this.submitting = false;
      if (data === 'success') {
        console.log('Message Sent Successfully')
        this.contactus.name = '';
        this.contactus.email = '';
        this.contactus.phoneNumber = '';
        this.contactus.msj = '';
      } else {
        console.log('Message Not Sent')
      }
    }).catch(err => {
      this.submitting = false;
      console.log(err)
    })

  }
  validateForm(): boolean {
    if (!this.contactus.name || !this.contactus.phoneNumber || !this.contactus.msj) {
      alert('Please fill in all required fields.');
      return false;
    }

    const phoneNumberRegex = /^[0-9]{10}$/;
    if (!phoneNumberRegex.test(this.contactus.phoneNumber)) {
      alert('Please enter a valid phone number.');
      return false;
    }

    return true;
  }
}
