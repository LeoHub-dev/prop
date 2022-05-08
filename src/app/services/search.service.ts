import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  getDate() {
    return this.http.get(
      'https://agendamigracolbackend.emtelco.co/api/list_date_schedule/?nopaginate=true&city_id=tipi33&headquarters_id=tipi48&schedulecstm__level1=57624622-fd3d-3941-89e0-5f735778a8da'
    );
  }
}
