import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { concertsComponent } from './concerts/concerts.component';
import { AddconcertComponent } from './add-concert/add-concert.component';
import { UpdateconcertComponent } from './update-concert/update-concert.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { concertGuard } from './concert.guard';

const routes: Routes = [
  {path: "concerts", component : concertsComponent},
  {path: "add-concert", component : AddconcertComponent, canActivate:[concertGuard]},
  {path: "updateconcert/:id", component: UpdateconcertComponent},
  {path: 'login', component: LoginComponent},
  {path: "", redirectTo: "concerts", pathMatch: "full" },
  {path: 'app-forbidden', component: ForbiddenComponent}
  ];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
