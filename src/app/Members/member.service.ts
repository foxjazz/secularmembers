import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Member, ExtendedMember, IPayment, AllIds} from './member.model';
import {config} from './config';
import 'rxjs/add/operator/catch';
@Injectable()
export class MemberService
{
    private http;
    constructor(private h: Http)
    {
        this.http = h;
    }
   /* public handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    private handleError2 (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }*/
    public getAllDocs(): Observable<AllIds>
    {
        let uri = config.test + "_all_docs";
        return this.http.get(uri)
            .map((res: Response) => res.json());

    }
    public getDoc(id: string): Observable<any>
    {
        let uri = config.test + id;
        return this.http.get(uri)
            .map((res: Response) => res.json());
    }
    private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
    private save(uri: string,data: string) : Observable<Response>{
        // this won't actually work because the StarWars API doesn't
        // is read-only. But it would look like this:
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions( { headers: headers } );
        return this.http
            .put(uri, data, options);
    }
    private saveNode(data: string) : Observable<Response>{
        // this won't actually work because the StarWars API doesn't
        // is read-only. But it would look like this:
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions( { headers: headers } );
        let uri  = 'http://localhost:3035/couchproxy';
        return this.http
            .post(uri, data, options);
    }
    public putOnNode(id: string, val: string)
    {
        let Member = JSON.parse(val);
        let body = {username: 'foxjazz', password: 'greeper', _id: id, couchbody: Member};
        this.saveNode(JSON.stringify(body)).subscribe(data => console.log(data.json()));
    }
    public putDoc(id: string, val: string){

        let uri = config.http + config.auth + config.testuri + id;
        let b  = 'https://' + config.IP + ':6984/members/' + id;
        //let uri = config.http +  config.testuri + id;

        this.save(b,val).subscribe(data => {
            console.log(data.json());
            console.log('test');
        });

        };



}
