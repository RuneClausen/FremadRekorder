import { Injectable } from '@angular/core';
import { Discipline } from 'src/app/shared/models/Discipline';
import { Rekord } from 'src/app/shared/models/Rekord';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }

  getAllDisciplines(): Discipline[] {
    return [
      { id: 1, name: '100m' },
      { id: 2, name: '200m' },
      { id: 3, name: '400m' },
      { id: 4, name: '800m' },
      { id: 5, name: '1000m' },
      { id: 6, name: '1500m' },
      { id: 7, name: 'One mile (1609m)' },
      { id: 8, name: '2000m' },
      { id: 9, name: '3000m' },
      { id: 10, name: '3000m forhindring' },
      { id: 11, name: '5000m bane' },
      { id: 12, name: '5 km landevej'},
      { id: 13, name: '10000m bane' },
      { id: 14, name: '10 km landevej' },
      { id: 15, name: '15 km' },
      { id: 16, name: '20 km' },
      { id: 17, name: 'Halvmarathon' },
      { id: 18, name: 'Marathon' },
      { id: 19, name: 'Gul Rute' },
      { id: 20, name: 'Risskovløbet' },
    ]
  }

  getAllRecords(): Rekord[] {
    return [
      { id: 111, gender: 'M', athlete: 'Rune Clausen', discipline: 14, time: '39:22', yearOfRecord: 2021 },
      { id: 1, gender: 'M', athlete: 'Jacob Rudjord', discipline: 14, time: '30:18', yearOfRecord: 2022 },
      { id: 2, gender: 'M', athlete: 'Asger Dalsgaard', discipline: 14, time: '30:41', yearOfRecord: 2016 },
      { id: 3, gender: 'M', athlete: 'Thorkild Sundstrup', discipline: 14, time: '31:07', yearOfRecord: 2015 },
      { id: 4, gender: 'M', athlete: 'Esben Hornum', discipline: 14, time: '31:12', yearOfRecord: 2021 },
      { id: 5, gender: 'M', athlete: 'Jonas Fusager', discipline: 14, time: '31:27', yearOfRecord: 2022 },
      { id: 6, gender: 'M', athlete: 'Omar Hassan', discipline: 14, time: '31:35', yearOfRecord: 2016 },
      { id: 7, gender: 'M', athlete: 'Daniel Vestergaard', discipline: 14, time: '31:51', yearOfRecord: 2021 },
      { id: 8, gender: 'M', athlete: 'Nikolaj Bauer Andersen', discipline: 14, time: '31:59', yearOfRecord: 2015 },
      { id: 9, gender: 'M', athlete: 'Sebastian Matz Nielsen', discipline: 14, time: '32:09', yearOfRecord: 2022 },
      { id: 10, gender: 'M', athlete: 'Niels K. Thomsen', discipline: 14, time: '32:16', yearOfRecord: 1988 },

      { id: 11, gender: 'M', athlete: 'Thorkild Sundstrup', discipline: 17, time: '1:07:47', yearOfRecord: 2015 },
      { id: 12, gender: 'M', athlete: 'Omar Hassan', discipline: 17, time: '1:06:25', yearOfRecord: 2017 },
      { id: 13, gender: 'M', athlete: 'Jacob Rudjord', discipline: 17, time: '1:07:14', yearOfRecord: 2021 },

      { id: 14, gender: 'M', athlete: 'Jørgen Holt', discipline: 6, time: '3.48:0', yearOfRecord: 1974 },
      { id: 15, gender: 'M', athlete: 'Preben Glue', discipline: 6, time: '3.42:4', yearOfRecord: 1967 },

      { id: 16, gender: 'M', athlete: 'Thorkild Sundstrup', discipline: 18, time: '2:24:08', yearOfRecord: 2018 },
    ]
  }

  getRecordsByDiscipline(disciplineId: number): Rekord[] {
    return this.getAllRecords().filter(r => r.discipline == disciplineId).sort((one, two) => (one.time < two.time ? -1 : 1)).slice(0,10);
  }

  getRecordsByAthlete(athlete: string): Rekord[] {
    return this.getAllRecords().filter(r => r.athlete === athlete).sort((one, two) => (one.discipline < two.discipline ? -1 : 1));
  }
}
