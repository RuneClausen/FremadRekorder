import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../services/records/records.service';
import { Discipline } from '../shared/models/Discipline';
import { Rekord } from '../shared/models/Rekord';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  records: Rekord[] = [];
  disciplines: Discipline[] = [];

  constructor(private recordsService: RecordsService) {}

  ngOnInit(): void {
    this.records = this.recordsService.getAllRecords();
    this.disciplines = this.recordsService.getAllDisciplines();
  }

  retrieveRecords(disciplineId: number) {
    return this.recordsService.getRecordsByDiscipline(disciplineId);
  }
}
