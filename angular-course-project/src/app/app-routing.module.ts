import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AnimalsComponent} from './animals/animals.component';
import {AdoptersComponent} from './adopters/adopters.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'adopters',
    pathMatch: 'full'
  },
  {
    path: 'animals',
    component: AnimalsComponent
  },
  {
    path: 'adopters',
    component: AdoptersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
