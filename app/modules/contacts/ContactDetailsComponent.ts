import {Contact} from "./Contact";
import { Component, EventEmitter } from "angular2/core";

import { Router, Location } from "angular2/router";
@Component({
  selector: "contact-details",
  templateUrl: "./views/contact-details.html",
  inputs: ["contact"],
  outputs: ["onDelete"],
  moduleId: module.id
})
export class ContactDetailsComponent {
  contact: Contact;
  onDelete: EventEmitter<Contact>;

  constructor(public router: Router,
              public location: Location) {
    this.onDelete = new EventEmitter<Contact>();
  }

  bookmark() {
    this.contact.bookmarked = !this.contact.bookmarked;
  }

  removeContact() {
    this.onDelete.emit(this.contact);
  }
}
