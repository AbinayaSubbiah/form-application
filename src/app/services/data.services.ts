import { Injectable } from "@angular/core";
import {
  Http,
  Response,
  Headers,
  URLSearchParams,
  RequestOptions
} from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class FormDetails {
  formUrl = "http://localhost:4567/forms";
  constructor(private http: Http) {}

  addData(data: form1): Observable<number> {
    let cpHeaders = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http
      .post(this.formUrl, JSON.stringify(data), options)
      .map(success => {})
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
  getData() {
    let cpHeaders = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http
      .get(this.formUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
}

export class form1 {
  constructor(public id, public email, public option, public password) {}
}
