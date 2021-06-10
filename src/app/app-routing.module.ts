import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GryffindorComponent } from './gryffindor/gryffindor.component';
import { HomeComponent } from './home/home.component';
import { HufflepuffComponent } from './hufflepuff/hufflepuff.component';
import { RavenclawComponent } from './ravenclaw/ravenclaw.component';
import { SearchComponent } from './search/search.component';
import { SlytherinComponent } from './slytherin/slytherin.component';

const routes: Routes = [
{
  path: 'gryffindor',
  component: GryffindorComponent
},
{
  path: 'hufflepuff',
  component:  HufflepuffComponent
},

{
  path: 'ravenclaw',
  component: RavenclawComponent
},
{
  path: 'slytherin',
  component: SlytherinComponent
},
{
  path: 'Search',
  component: SearchComponent
},
{ 
path: '',
redirectTo: 'app',
pathMatch: 'full',
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
