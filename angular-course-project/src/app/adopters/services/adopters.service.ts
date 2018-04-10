import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Adopter} from '../models/adopter.model';

@Injectable()
export class AdoptersService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Adopter[]> {
    return this.httpClient.get<Adopter[]>('http://localhost:3000/adopters');
  }

}
