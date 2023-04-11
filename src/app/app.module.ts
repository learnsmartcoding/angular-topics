import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HiddenExampleComponent } from './components/hidden-example/hidden-example.component';
import { NgclassExampleComponent } from './components/ngclass-example/ngclass-example.component';
import { NgstyleExampleComponent } from './components/ngstyle-example/ngstyle-example.component';
import { NgswitchExampleComponent } from './components/ngswitch-example/ngswitch-example.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { AutoCompleteExampleComponent } from './components/auto-complete-example/auto-complete-example.component';


@NgModule({
  declarations: [
    routedComponents,
    HiddenExampleComponent,
    NgclassExampleComponent,
    NgstyleExampleComponent,
    NgswitchExampleComponent,
    AutoCompleteComponent,
    AutoCompleteExampleComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
