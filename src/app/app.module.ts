import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { QuestionComponentComponent } from './components/question-component/question-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    QuestionComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
