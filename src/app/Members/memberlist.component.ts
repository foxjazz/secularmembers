import {Component, OnDestroy, OnInit} from '@angular/core';

import {Member, IPayment, ExtendedMember, AllIds} from './member.model';
import {PaymentComponent} from './payment.component';
import {ActivatedRoute, Params, Router}   from '@angular/router';
import {MemberService} from "./member.service";


//import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({

    selector: 'as-memberlist',
    providers: [MemberService,PaymentComponent],
    templateUrl: 'memberlist.html',
    styleUrls: ['member.css']
})
export class MemberlistComponent implements OnInit, OnDestroy{
    member: Member;
    payments: Array<IPayment>;
    ems: Array<ExtendedMember>;
    memberlist: Array<Member>;
    mode = "Add";
    membercount: number;
    router: Router;
    isactive: string;
    activeFilter: boolean;
    firstNameFilter: string;
    lastNameFilter: string;
    private list: Member[];
    private memservice: MemberService;
    private showCompleted: Boolean;

  //  memberlist: FirebaseListObservable<any[]>;
    constructor(private r: Router, private ms: MemberService) {
        this.router = r;
        this.memservice  = ms;
        this.showCompleted = true;
        this.membercount = 0;
        this.firstNameFilter = "";
        this.lastNameFilter="";
        this.activeFilter= false;
    //    this.memberlist = af.database.list('./members');
    }
    getPayments(): Array<IPayment>{
        if(this.payments == null)
            this.payments = new Array<IPayment>();
        return this.payments;
    }

    getExtended(): Array<ExtendedMember>{
        if(this.ems == null)
            this.ems = new Array<ExtendedMember>();
        return this.ems;
    }

    submitForm() {
        //let m = new Member('',false);
        //
        if(this.mode === "Add") {
            this.memberlist.push(this.member);
            this.member.index = this.memberlist.length;
            let d = new Date();
            let id = d.toString();
            this.memservice.putDoc(id,JSON.stringify(this.member));
        }
        else
        {
            this.memservice.putDoc(this.member._id,JSON.stringify(this.member));
        }
        this.member = new Member('', false);
        this.mode = "Add";
    }

    delMember(i: number) {
        let res: string;
        this.memberlist[i].delete();

    }

    public onUsingTable ( al: Member) {
        if(event.target["id"] === "Select")
        {
            this.member = al;
            this.mode = "Save";

        }
        if(event.target["id"] === "Payments")
        {
            if(al.payments == null || al.payments.length == 0)
            {
                let newpay = {receivedDate: new Date(), amount: 0, type: "cash", targetDate: new Date(), active: false};
                al.payments.push(newpay);
            }
            this.payments = al.payments;
        }

        else if (event.target["id"]==="Remove"){
            al.delete();
        }
        if(event.target["id"]==="ems"){
            //redirectTo: '/dashboard'
            localStorage.setItem('member',JSON.stringify(al));
            this.router.navigate(['/extendedMembers']);
            //this.router.navigate(['/extendedMembers', 'member']);
        }


    }

    ngOnDestroy(){
        //localStorage.setItem('members', JSON.stringify(this.memberlist));
    }
    ngOnInit(){
        let res: string;
        //Here we do the initial call to get all of the id's from the database.
        //we are making the assumption that the data is in  a format we can use. validation is not yet implemented

 this.memberlist = new Array<Member>();
 this.memservice.getAllDocs().subscribe(r1 => {

     for(let nn of r1.rows)
     {
         this.memservice.getDoc(nn.id).subscribe(res2 =>
         {
                this.memberlist.push(res2);
         });
                console.log(nn.id);
         }
     });
     /*
        res = localStorage.getItem('members');
        if(res != null && res.indexOf('phone') > 0) {
            this.memberlist = JSON.parse(res);
            this.member = this.memberlist[0];
        }
        else{
            this.memberlist = new Array<Member>();
            this.member = new Member('',false);

        }
       */
        this.member = new Member('',false);
        this.membercount = this.memberlist.length;


    }
}
