import { SimpleQuestionService } from '../simple-question.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simple-question',
  templateUrl: './simple-question.component.html',
  styleUrls: ['./simple-question.component.css']
})
export class SimpleQuestionComponent implements OnInit {
  question = '' ;
  response = null;
  error:boolean = false;

  constructor(private simpleQuestionService: SimpleQuestionService) { }
  ngOnInit(): void {
  }
  questionChange(value: string){
    this.response=null
  }
  onSubmit(form: NgForm):void{
      this.simpleQuestionService.getResponse(form.value.question).subscribe(
        (response) => {
          this.response = response.title
          console.log(this.response)
        },
        (erreur) => {
          this.error=true;
        }
      );
  }

}
