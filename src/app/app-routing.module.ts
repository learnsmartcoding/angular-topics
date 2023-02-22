import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HiddenExampleComponent } from './components/hidden-example/hidden-example.component';
import { NgclassExampleComponent } from './components/ngclass-example/ngclass-example.component';
import { NgstyleExampleComponent } from './components/ngstyle-example/ngstyle-example.component';
import { NgswitchExampleComponent } from './components/ngswitch-example/ngswitch-example.component';
import { DynamicControlsComponent } from './dynamiccontrols/dynamiccontrols.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'reactive-forms/dynamically-add-controls-to-form', component:DynamicControlsComponent },
  { path: 'exploring-angular-template-syntax/hidden-attribute-usage', component:HiddenExampleComponent },
  { path: 'exploring-angular-template-syntax/ngSwitch-usage', component:NgswitchExampleComponent },
  { path: 'exploring-angular-template-syntax/ngClass-usage', component:NgclassExampleComponent },
  { path: 'exploring-angular-template-syntax/ngStyle-usage', component:NgstyleExampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routedComponents = [HeaderComponent, HomeComponent, AppComponent, DynamicControlsComponent];
