import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ville } from '../common/ville';


@Injectable({
  providedIn: 'root'
})
export class VilleService {

  private villeUrl = 'http://localhost:8080/api/test/all/villes';

  constructor(private httpClient: HttpClient) { }

  getAllVilles(): Observable<Ville[]> {

    return this.httpClient.get<Ville[]>(this.villeUrl+'/');
  }

  getVille(id: number): Observable<Ville> {

    return this.httpClient.get<any>(this.villeUrl+'/'+id)
    
  }

 /*  createVille(ville: Ville): Observable<Ville[]> {

    return this.httpClient.post<any>(this.villeUrl, ville);
   
  }

  updateVille(id: number, ville: Ville): Observable<Ville[]> {

    return this.httpClient.put<any>(this.villeUrl+'/'+id, ville);
  }

  deleteVilles(id: number): Observable<Ville[]> {

    return this.httpClient.delete<any>(this.villeUrl+'/'+id);
  } */

}
