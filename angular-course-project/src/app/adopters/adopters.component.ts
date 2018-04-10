import {Component, OnInit} from '@angular/core';
import {Adopter} from './models/adopter.model';
import {AdoptersService} from './services/adopters.service';

@Component({
  selector: 'app-adopters',
  templateUrl: './adopters.component.html',
  styleUrls: ['./adopters.component.scss']
})
export class AdoptersComponent implements OnInit {

  adopters: Adopter[];

  constructor(private adoptersService:AdoptersService) {
  }

  ngOnInit(): void {
    this.adoptersService.getAll().subscribe((adopters) => {
      this.adopters = adopters;
    });
  }
}
