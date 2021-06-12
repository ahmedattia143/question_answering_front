import { ContextQuestionService } from '../context-question.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-context-question',
  templateUrl: './context-question.component.html',
  styleUrls: ['./context-question.component.css']
})
export class ContextQuestionComponent implements OnInit {

  constructor(private contextQuestionService: ContextQuestionService) { }
  context: string ='';
  question:string = '';
  response = null;
  error:boolean =false;
  loading:boolean = false;
  private file: any;
  ngOnInit(): void {
  }

  onFileChange(fileChangeEvent:any) {
    console.log('im in onfilechange')
    this.file = fileChangeEvent.target.files[0];
    this.readFile(this.file)
  }

  readFile(file: File) {
    var reader = new FileReader();
    reader.onload = () => {
      this.context = reader.result?.toString() || ''
    };
    reader.readAsText(file);

}

  questionChange(value: string){
    this.response=null
  }
  onSubmit(form: NgForm):void{
    this.loading = true
      this.contextQuestionService.getResponse(form.value.question,form.value.context).subscribe(
        (response) => {
          this.response = response.answer
          this.loading = false;
          console.log(this.response)
        },
        (erreur) => {
          this.loading = false;
          this.error=true;

        }
      );
  }

}
