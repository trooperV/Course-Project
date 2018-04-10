import {Component, OnInit} from '@angular/core';
import {Animal} from './models/animal.model';
import {AnimalsService} from './services/animals.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {

  animals: Animal[];

  constructor(private animalsService: AnimalsService) {
  }

  ngOnInit(): void {
    this.animalsService.getAll().subscribe((animals) => {
      this.animals = animals;
    });
  }

}
