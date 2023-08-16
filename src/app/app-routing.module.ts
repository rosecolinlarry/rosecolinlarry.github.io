import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodingExercisesComponent } from './coding-exercises/coding-exercises.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { StorefrontComponent } from './fantasy-shop/storefront/storefront.component';

const routes: Routes = [
  {path: 'home', component: MainLayoutComponent},
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: 'coding-exercises', component: CodingExercisesComponent },
      { path: 'fantasy-shop', component: StorefrontComponent }]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
