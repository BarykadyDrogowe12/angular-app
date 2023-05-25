import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent {
  //private is only for this class
  //protected goes for structures like html
  //public allows to use all of that and in other scripts
  protected contacts: any = [
    {id: 1, surname: "Nowak", firstName: "Tomek", phone: "+48 111222333"}
  ];

}
