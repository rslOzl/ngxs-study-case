import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "./shared/shared.module";
import {NgxsModule} from "@ngxs/store";
import {DenemeState} from "./shared/states/deneme.state";
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot({positionClass:"toast-bottom-right"}),
    BrowserAnimationsModule,
    SharedModule,
    NgxsModule.forRoot([DenemeState],{
      developmentMode: true
    }),
    NgxsReduxDevtoolsPluginModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
