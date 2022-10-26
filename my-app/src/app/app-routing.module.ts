import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '', // l'URL sans le / de départ
    component: HomeComponent,
  },
  {
    path: 'about', // l'URL sans le / de départ
    component: AboutComponent,
  },
  {
    path: '**',
    // component: NotFoundComponent
    redirectTo: '/',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
