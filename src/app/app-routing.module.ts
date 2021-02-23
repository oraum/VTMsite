import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CharacterCreatorComponent} from './character-creator/character-creator.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'creator', component: CharacterCreatorComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
