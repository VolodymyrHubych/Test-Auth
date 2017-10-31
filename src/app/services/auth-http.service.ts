import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams, Response } from '@angular/http';
import { Observable  } from 'rxjs/Observable';
import { AuthService } from './auth.service';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthHttpService {
    constructor(private http: Http, private authService: AuthService) {}

   createHeaders(): any {
       let headers = new Headers();
       headers.append('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('token')).token);
       return headers;
    }

    get(url: string, data?:any) : Observable<any> { 
        let headers = this.createHeaders();
        let params = this.convertToParams(data);
        return this.http.get(url, { headers: headers, search: params }).catch(error => {
            return this.handle401(error);
        });
    }

   delete(url: string, data?:any) : Observable<any> {
        let headers = this.createHeaders();
        let params = this.convertToParams(data);
        return this.http.delete(url, { headers: headers, search: params }).catch(error => {
            return this.handle401(error);
        });
    }

    post(url: string, data: any) : Observable<any> {
        let headers = this.createHeaders();
        return this.http.post(url, data, { headers: headers }).catch(error => {
            return this.handle401(error);
        });
    }

    put(url: string, data: any) : Observable<any> {
        let headers = this.createHeaders();
        return this.http.put(url, data, { headers: headers }).catch(error => {
            return this.handle401(error);
        });
    }


    convertToParams(parameters: any) {
        let params = new URLSearchParams();
        for (let key in parameters) {
            params.set(key, parameters[key]);
        }
        console.log('Params: ', params.toString());
        return params.toString();
    }

    handle401(error: any) {
        if(error.status === 401) {
          this.authService.logout()
        }
        return Observable.throw(error);
    }
}
