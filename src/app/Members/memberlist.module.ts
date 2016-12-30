import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MemberlistComponent } from './index';
import { PaymentComponent } from './payment.component';
import {ExtendedMembersComponent} from "./ExtendedMembers.component";
import {FilterPipe} from "./filter.pipe";
import {HttpModule} from "@angular/http";
import {MaintenanceComponent} from "./maintenance.component";
 //import { AngularFireModule } from 'angularfire2';
 export const firebaseConfig = {
 apiKey: 'AIzaSyD3UeQygrWX3JWL3o9DWe8c-7r-rF1KD30',
 authDomain: 'memberships-a6f7c.firebaseapp.com',
 databaseURL: 'https://memberships-a6f7c.firebaseio.com',
 storageBucket: 'memberships-a6f7c.appspot.com'
 };
 /*const firebaseAuthConfig = {
 method: AuthMethods.Popup,
 remember: 'default'
 };
 */
 //export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
@NgModule({
    declarations: [
        PaymentComponent,
        ExtendedMembersComponent,
        MemberlistComponent,
        FilterPipe,
        MaintenanceComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        HttpModule,
    ],
    exports: [
        MemberlistComponent,
        MaintenanceComponent,
        ExtendedMembersComponent,
        FilterPipe
    ]
})
export class MemberlistModule {
}
