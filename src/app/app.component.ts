import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student Management';

  items = [
    {
      label: 'Students',
      icon: 'pi pi-fw pi-users',
      items: [
        {
          label: 'List',
          icon: 'pi pi-fw pi-list',
          routerLink: '/students'
        },
        {
          label: 'Add',
          icon: 'pi pi-fw pi-plus',
          routerLink: '/student/add'
        }
      ]
    }
  ];
}
