import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Page Components
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'dashboard',
    component: HomeComponent,
  },
  {
    path: 'account',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
