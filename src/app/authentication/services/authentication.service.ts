import { RestAPIService } from '@air-core/rest-api/rest-api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService extends RestAPIService {

  constructor( http: HttpClient ) {
    super(http);
  }

  public onSignIn<PL, R>(payload: PL): Observable<R>{
    const requestUrl = '/login';
    const parameters = {};
    const headers = {};
    return this.postRequest<PL, R>(requestUrl, payload, parameters, headers);
  }






}
