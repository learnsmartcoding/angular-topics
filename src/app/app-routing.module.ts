import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DynamicControlsComponent } from './dynamiccontrols/dynamiccontrols.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'reactive-forms/dynamically-add-controls-to-form', component:DynamicControlsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routedComponents = [HeaderComponent, HomeComponent, AppComponent, DynamicControlsComponent];
