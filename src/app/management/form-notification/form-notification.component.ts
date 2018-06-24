import { Component, OnInit, NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-notification',
  templateUrl: './form-notification.component.html',
  styleUrls: ['./form-notification.component.css']
})

export class FormNotificationComponent implements OnInit {

  notificationForm: FormGroup;
  formSubmitted = false;
  constructor(notificationFormBuilder: FormBuilder) {
    this.notificationForm = notificationFormBuilder.group({
      title: [''],
      description: [''],
      target: '',
    });
   }

  onSubmit(value: string): void {
    console.log(value);
  }
  ngOnInit() {
      // this.NotificationForm = this.notificationFormBuilder.group({
      //   title: ['', Validators.required, Validators.minLength(5)],
      //   // titles: this.notificationFormHolderBuilder.array([
      //   //       this.initTitle(),
      //   //   ]),
      //   description: '',
      //   target: '',
      // });
      // this.createForm();
  }

  // public setMoment(moment: any): any {
  //   this.setMoment = moment;
  //   // Do whatever you want to the return object 'moment'
  // }

  // createForm() {
  //   this.notificationForm = this.notificationFormBuilder.group(
  //     {
  //       title: ['', Validators.required, Validators.minLength(5)],
  //       description: '',
  //       target: '',
  //     }
  //   );
  // }


//   initDescription() {
//       return this.notificationFormBuilder.group({
//            });
//   }

//   addDescription() {
//       const control = <FormArray>this.NotificationForm.controls['Descriptions'];
//       control.push(this.initTitle());
//   }

//   removeDescription(i: number) {
//       const control = <FormArray>this.NotificationFormHolder.controls['Descriptions'];
//       control.removeAt(i);
//   }

//   initTitle() {
//     return this.notificationFormHolderBuilder.group({
//         street: ['', Validators.required],
//         postcode: ['']
//     });
// }

// addTitle() {
//     const control = <FormArray>this.NotificationFormHolder.controls['Titles'];
//     control.push(this.initTitle());
// }

// removeTitle(i: number) {
//     const control = <FormArray>this.NotificationFormHolder.controls['Titles'];
//     control.removeAt(i);
// }


// initTarget() {
//   return this.notificationFormHolderBuilder.group({
//        });
// }

// addTarget() {
//   const control = <FormArray>this.NotificationFormHolder.controls['Targets'];
//   control.push(this.initTitle());
// }

// removeTarget(i: number) {
//   const control = <FormArray>this.NotificationFormHolder.controls['Targets'];
//   control.removeAt(i);
// }

  save(model: Notification) {
      // call API to save
      // ...
      console.log(model);
  }

  // onFormSubmit() {
  //   // TODO: serialize title, description, target.
  //     // function censor(key, value) {
  //     //     if (typeof(value) === 'string') {
  //     //       return undefined;
  //     //     }
  //     //     return value;
  //     // }
  //     // const foo = { title: 'title', description: 'description', doi_tuong : 'target'};
  //     // const jsonString = JSON.stringify(foo, censor);
  //     // console.log(jsonString.toString());

  //     // return true;
  //     const data = JSON.stringify(this.notificationForm.value);
  //     console.log('-----Team in JSON Format-----');
  //     console.log(data);
  //     this.formSubmitted = true;
  //     this.notificationForm.reset();
  // }
}



// export interface Notification {
//   title: string;
//   description: string;
//   target: string;
// }
