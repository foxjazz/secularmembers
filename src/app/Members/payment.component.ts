import {Component, Input, OnInit} from '@angular/core';

import {IPayment} from './member.model';
//import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({

    selector: 'as-payment',
    templateUrl: 'payment.html',
    styleUrls: ['member.css']
})
export class PaymentComponent implements OnInit {
    constructor(){
        if(this.payments == null || this.payments.length === 0){
            this.pay =  {receivedDate: new Date(), amount: 0, type: "cash", targetDate: new Date(), active: false};
        }
        else {
            this.pay = this.payments[0];
        }


    }
    @Input()
    payments: Array<IPayment>;
    pay: IPayment;
    mode: string;
    submitForm() {
        //let m = new Member('',false);
        //
        if(this.mode === "Add") {
            this.payments.push(this.pay);
        }
        this.pay = {receivedDate: new Date(), amount: 0, type: "cash", targetDate: new Date(), active: false};
        this.mode = "Add";
    }
    public addPayment(p: IPayment){
        this.payments.push(p);
    }
    public onPaymentTable(pay :IPayment){
        if(event.target["id"]=== "Select")
        {
            this.mode = "Save";
            this.pay = pay;
        }
        if(event.target["id"]=== "Add")
        {
            let newpay = {receivedDate: new Date(), amount: 0, type: "cash", targetDate: new Date(), active: false};
            this.payments.push(newpay);
        }
        else if(event.target["id"]==="Delete")
        {
            let index = this.payments.indexOf(pay, 0);
            if (index > -1) {
                this.payments.splice(index, 1);
            }
        }

    }
    ngOnInit(){
        this.mode = "Add";
    }
}


/**
 * Created by fox21 on 12/18/2016.
 */
