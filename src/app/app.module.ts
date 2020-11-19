import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement} from '@angular/elements';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  entryComponents: [AppComponent]
})
export class AppModule { 
  constructor(
    private injector: Injector
  ){

  }

  ngDoBootstrap(){
    const appComponent = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('app-root', appComponent);
  }

}


