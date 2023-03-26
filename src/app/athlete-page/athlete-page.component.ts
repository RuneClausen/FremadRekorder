import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AthleteService } from '../services/athlete/athlete.service';
import { RecordsService } from '../services/records/records.service';
import { Athlete } from '../shared/models/Athlete';

@Component({
  selector: 'app-athlete-page',
  templateUrl: './athlete-page.component.html',
  styleUrls: ['./athlete-page.component.css']
})
export class AthletePageComponent {
  athlete!: Athlete;

  constructor(private route: ActivatedRoute, private athleteService: AthleteService, private recordsService: RecordsService) {
    route.params.subscribe((params) => {
      if (params['athleteName']) {
        this.athlete = athleteService.getAthleteByName(params['athleteName']);
        this.athlete.records = recordsService.getRecordsByAthlete(params['athleteName']);
      }
    })
  }

  getDisciplineName(disciplineId: number): string {
    return this.recordsService.getAllDisciplines().find(disciplines => disciplines.id == disciplineId)!.name;
  }
}
