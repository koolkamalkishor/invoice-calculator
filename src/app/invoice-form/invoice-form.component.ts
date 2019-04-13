import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Invoice } from '../data/invoice';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {

  originalInvoice: Invoice = {
    customer_id: null,
    start_date: null,
    end_date: null
  }

  invoice: Invoice = {...this.originalInvoice};

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    this.dataService.getCustomerOrders(this.invoice).subscribe(
      result => console.log('success: ', result),
      error => console.log('error: ', error)
    );
  }
}
