import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: "contacts-list"},
  //redirect the user to contacts-list when on main page
  {path:"contacts-list", component: ContactsListComponent}
  //add the contact list component into the routing
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
