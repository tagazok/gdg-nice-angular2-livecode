import {ContactsListComponent} from "./ContactsListComponent";
import { Component, ViewChild, ContentChild } from "angular2/core";
import { Contact } from "./Contact";
import { ContactService } from "./ContactService";
import { FormBuilder, ControlGroup, Validators } from "angular2/common";


@Component({
  selector: "contact-app",
  styles: [
    '.add-form { background-color: rgb(241, 255, 245);}',
    '.error { color: red; }'
  ],
  template: `
    <div class="row">
      <div class="col-md-12">
        <div class="panel panel-default add-form">
          <div class="panel-body">
            <h3>New contact</h3>
            <form [ngFormModel]="contactForm" (submit)="addContact()">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Firsname</label>
                    <input type="text" class="form-control" ngControl="firstname">
                    <small class="error" *ngIf="contactForm.controls.firstname.dirty && contactForm.controls.firstname.hasError('required')">Firstname is required</small>
                  </div>
                  <div class="form-group">
                    <label>Lastname</label>
                    <input type="text" class="form-control" ngControl="lastname">
                    <small class="error" *ngIf="contactForm.controls.lastname.dirty && contactForm.controls.lastname.hasError('required')">Lastname is required</small>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" ngControl="email">
                  </div>
                  <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" ngControl="phone">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <button [disabled]="!contactForm.valid" type="submit" class="btn btn-success pull-right">Add contact</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
      <div class="row">
        <div class="col-md-12">
          <div class="pull-right">
            <button class="btn btn-link" (click)="showBookmarked(false)">All</button> | <button class="btn btn-link" (click)="showBookmarked(true)">Bookmarked</button>
          </div>
        </div>
      </div>
    <div class="row">
      <contacts-list [list]="contacts" [bookmarked]="bookmarked"></contacts-list>
    </div>
  `,
  directives: [ContactsListComponent],
  viewProviders: [ContactService],
})
export class ContactAppComponent {
  contacts: Array<Contact> = [];
  contactForm: ControlGroup;
  bookmarked: boolean = false;

  constructor(cs: ContactService, fb: FormBuilder) {
    this.contacts = cs.get();
    this.contactForm = fb.group({
      firstname: fb.control("", Validators.required),
      lastname: fb.control("", Validators.required),
      email: fb.control(""),
      phone: fb.control("")
    });
  }

  addContact() {
    console.log(this.contactForm.value);
    this.contacts.push(
      new Contact(
        this.contactForm.value.firstname.toUpperCase(),
        this.contactForm.value.firstname,
        this.contactForm.value.lastname,
        this.contactForm.value.email,
        this.contactForm.value.phone
      )
    );
  }

  showBookmarked(bookmarked: boolean) {
    this.bookmarked = bookmarked;
  }
}
