import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MongodbService {

  constructor(private http: Http) { }
  
  getAllAcquisitions() {
    return this.http.get('/api/mongodb')
      .map(res => res.json());
  }
}
