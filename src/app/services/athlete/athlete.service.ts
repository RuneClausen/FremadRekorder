import { Injectable } from '@angular/core';
import { Athlete } from 'src/app/shared/models/Athlete';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

  constructor() { }

  getAllAthletes(): Athlete[] {
    return [
      { id: 1, name: 'Rune Clausen', records: [] },
      { id: 2, name: 'Jacob Rudjord', records: [] },
      { id: 3, name: 'Asger Dalsgaard', records: [] },
      { id: 4, name: 'Thorkild Sundstrup', records: [] },
      { id: 5, name: 'Esben Hornum', records: [] },
      { id: 6, name: 'Jonas Fusager', records: [] },
      { id: 7, name: 'Omar Hassan', records: [] },
      { id: 8, name: 'Daniel Vestergaard', records: [] },
      { id: 9, name: 'Nikolaj Bauer Andersen', records: [] },
      { id: 10, name: 'Sebastian Matz Nielsen', records: [] },
      { id: 11, name: 'Niels K. Thomsen', records: [] },
      { id: 12, name: 'Preben Glue', records: [] },
      { id: 13, name: 'Jørgen Holt', records: [] },
    ]
  }

  getAthleteById(athleteId: number): Athlete {
    return this.getAllAthletes().find(a => a.id == athleteId)!;
  }

  getAthleteByName(athleteName: string): Athlete {
    return this.getAllAthletes().find(a => a.name == athleteName)!;
  }
}
