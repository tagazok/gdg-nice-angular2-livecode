import {Contact} from "./Contact";

export class ContactService {
  private list: Array<Contact> = [];

  constructor() {
    this.list.push(
      new Contact("FRANCOISBEAUFORT", "François", "Beaufort", "fb@google.com", "0678765456"),
      new Contact("REDWANZARGHOUNE", "Redwan", "Zarghoune", "rz@google.com", "0709890987")
    );
  }

  get(): Array<Contact> {
    return this.list;
  }
}
