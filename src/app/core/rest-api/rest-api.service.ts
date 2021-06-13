import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient, HttpResponseBase } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContext, IHeaders, IParameters } from './rest-api.models';

@Injectable({
  providedIn: 'root',
})
export class RestAPIService {

  private baseUrl = '/api';

  constructor(private http: HttpClient) {}

  public getRequest<R>(
    requestUrl: string,
    parameters: IParameters,
    headers: IHeaders,
  ): Observable<R> {
    return this.http.get<R>(this.baseUrl+requestUrl, {
      params: this.getHttpParametersFromObject(parameters),
      headers: this.getHttpHeadersFromObject(headers)
    });
  }

  public deleteRequest<R>(
    requestUrl: string,
    parameters: IParameters,
    headers: IHeaders,
  ): Observable<R> {
    return this.http.delete<R>(this.baseUrl+requestUrl, {
      params: this.getHttpParametersFromObject(parameters),
      headers: this.getHttpHeadersFromObject(headers)
    });
  }

  public patchRequest<PL, R>(
    requestUrl: string,
    payload: PL,
    parameters: IParameters,
    headers: IHeaders,
  ): Observable<R> {
    return this.http.patch<R>(this.baseUrl+requestUrl, payload, {
      params: this.getHttpParametersFromObject(parameters),
      headers: this.getHttpHeadersFromObject(headers)
    });
  }

  public postRequest<PL, R>(
    requestUrl: string,
    payload: PL,
    parameters: IParameters,
    headers: IHeaders,
  ): Observable<R> {
    return this.http.post<R>(this.baseUrl+requestUrl, payload, {
      params: this.getHttpParametersFromObject(parameters),
      headers: this.getHttpHeadersFromObject(headers)
    });
  }

  // TODO После перехода на Angular 12 применить HttpContext
  public postRequestWithContext<PL>(
    requestUrl: string,
    payload: PL,
    parameters: IParameters,
    headers: IHeaders,
  ): Observable<HttpResponseBase> {
    return this.http.post<HttpResponseBase>(this.baseUrl+requestUrl, payload, {
      params: this.getHttpParametersFromObject(parameters),
      headers: this.getHttpHeadersFromObject(headers),
      observe: 'response',
      responseType: 'json',
    });
  }

  public putRequest<PL, R>(
    requestUrl: string,
    payload: PL,
    parameters: IParameters,
    headers: IHeaders,
  ): Observable<R> {
    return this.http.put<R>(this.baseUrl+requestUrl, payload, {
      params: this.getHttpParametersFromObject(parameters),
      headers: this.getHttpHeadersFromObject(headers)
    });
  }

  private getHttpParametersFromObject(parameters: IParameters): HttpParams {
    return parameters && Object
      .getOwnPropertyNames(parameters)
      .reduce((p, key) => p.set(key, parameters?.[key]), new HttpParams());
  }

  private getHttpHeadersFromObject(headers: IHeaders): HttpHeaders {
    return Object
      .getOwnPropertyNames(headers)
      .reduce((p, key) => p.set(key, headers?.[key]), new HttpHeaders());
  }

}
