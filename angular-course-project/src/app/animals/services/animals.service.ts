import {Injectable} from '@angular/core';
import {Animal} from '../models/animal.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AnimalsService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>('http://localhost:3000/animals');
  }

}
