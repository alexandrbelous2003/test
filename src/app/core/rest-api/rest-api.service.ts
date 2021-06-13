import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient, HttpResponseBase } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestAPIService {

  private baseUrl = '/api';

  constructor(private http: HttpClient) {}

  public getRequest<R, P = void, H = void>(
    requestUrl: string,
    parameters?: P,
    headers?: H,
  ): Observable<R> {
    return this.http.get<R>(this.baseUrl+requestUrl, {
      params: this.getHttpParametersFromObject<P>(parameters),
      headers: this.getHttpHeadersFromObject<H>(headers)
    });
  }

  public deleteRequest<R, P = void, H = void>(
    requestUrl: string,
    parameters?: P,
    headers?: H,
  ): Observable<R> {
    return this.http.delete<R>(this.baseUrl+requestUrl, {
      params: this.getHttpParametersFromObject<P>(parameters),
      headers: this.getHttpHeadersFromObject<H>(headers)
    });
  }

  public patchRequest<PL, R, P = void, H = void>(
    requestUrl: string,
    payload: PL,
    parameters?: P,
    headers?: H,
  ): Observable<R> {
    return this.http.patch<R>(this.baseUrl+requestUrl, payload, {
      params: this.getHttpParametersFromObject<P>(parameters),
      headers: this.getHttpHeadersFromObject<H>(headers)
    });
  }

  public postRequest<PL, R, P = void, H = void>(
    requestUrl: string,
    payload: PL,
    parameters?: P,
    headers?: H,
  ): Observable<R> {
    return this.http.post<R>(this.baseUrl+requestUrl, payload, {
      params: this.getHttpParametersFromObject<P>(parameters),
      headers: this.getHttpHeadersFromObject<H>(headers)
    });
  }

  // TODO После перехода на Angular 12 применить HttpContext
  public postRequestWithContext<PL, P = void, H = void>(
    requestUrl: string,
    payload: PL,
    parameters?: P,
    headers?: H,
  ): Observable<HttpResponseBase> {
    return this.http.post<HttpResponseBase>(this.baseUrl+requestUrl, payload, {
      params: this.getHttpParametersFromObject<P>(parameters),
      headers: this.getHttpHeadersFromObject<H>(headers),
      observe: 'response',
      responseType: 'json',
    });
  }

  public putRequest<PL, R, P = void, H = void>(
    requestUrl: string,
    payload: PL,
    parameters?: P,
    headers?: H,
  ): Observable<R> {
    return this.http.put<R>(this.baseUrl+requestUrl, payload, {
      params: this.getHttpParametersFromObject<P>(parameters),
      headers: this.getHttpHeadersFromObject<H>(headers)
    });
  }

  private getHttpParametersFromObject<P = void>(parameters: P): HttpParams {
    return parameters && Object
      .getOwnPropertyNames(parameters)
      .reduce((p, key) => p.set(key, parameters[key]), new HttpParams());
  }

  private getHttpHeadersFromObject<H = void>(headers: H): HttpHeaders {
    return headers && Object
      .getOwnPropertyNames(headers)
      .reduce((p, key) => p.set(key, headers[key]), new HttpHeaders());
  }

  // private getHttpContextFromObject<C = void>(headers: C): HttpContext {
  //   return headers && Object
  //     .getOwnPropertyNames(headers)
  //     .reduce((p, key) => p.set(key, headers[key]), new HttpHeaders());
  // }

}
