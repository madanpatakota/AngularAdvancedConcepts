import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularAdvancedConcepts';

  value = 'titleForCustomersDetailsPage';

  customersInformation = [
    {
      name: 'Clerk',
      password: 'clerk!@#$',
      location: 'UK',
    },
    {
      name: 'William',
      password: 'William!@#$',
      location: 'US',
    },
  ];

  evtcustomerDetails(info: any) {
    console.log('in App component ', info);
    this.customersInformation.push(info);
  }

  customer: any;
  evtCustomerRowCaptureDetails(event: any) {
    console.log('highlighed in the app ', event);
    this.customer = event;
  }

  evtChanged() {
    this.customersInformation = [
      {
        name: 'Clerk Junior',
        password: 'clerkJUIon!@#$',
        location: 'delhi',
      },
      {
        name: 'Peterson',
        password: 'Peterson!@#$',
        location: 'washington',
      },
    ];
  }
}
