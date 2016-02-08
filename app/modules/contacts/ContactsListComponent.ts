import {ContactDetailsComponent} from "./ContactDetailsComponent";
import {Contact} from "./Contact";
import { Component, Pipe, PipeTransform } from "angular2/core";

@Pipe({
    name: "isBookmarked"
})
export class IsBookmarkedPipe implements PipeTransform {
  transform(items: Array<Contact>, args: any[]): any {
    if (args[0] === false) {
      return items;
    }
    return items.filter(item => item.bookmarked === true);
  }
}

@Component({
  selector: "contacts-list",
  template: `
    <div *ngFor="#contact of list |isBookmarked:bookmarked" class="col-md-4">
      <contact-details [contact]="contact" (onDelete)="removeContact($event)" ></contact-details>
    </div>
  `,
  inputs: ["list", "bookmarked"],
  directives: [ContactDetailsComponent],
  pipes: [IsBookmarkedPipe]
})
export class ContactsListComponent {
  bookmarked: boolean;
  list: Array<Contact>;


  removeContact(contact: Contact) {
    console.log(`Remove contact ${contact.firstname}`);
    this.list.splice(this.list.indexOf(contact), 1);
  }
}
