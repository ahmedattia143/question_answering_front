import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContextQuestionService } from './context-question.service';
import { SimpleQuestionService } from './simple-question.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SimpleQuestionComponent } from './simple-question/simple-question.component';
import { ContextQuestionComponent } from './context-question/context-question.component';
import { FormsModule } from '@angular/forms';
import {ROUTING} from './app-routing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AnswerComponent } from './answer/answer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SimpleQuestionComponent,
    ContextQuestionComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ROUTING,
  ],
  providers: [SimpleQuestionService,ContextQuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
