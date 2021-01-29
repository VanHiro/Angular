import { Component, OnInit } from '@angular/core';
interface Question {
  title: string;
  author: number;
  text: string;
  tags: Array<string>;
}

@Component({
  selector: 'app-question-component',
  templateUrl: './question-component.component.html',
  styleUrls: ['./question-component.component.css']
})
export class QuestionComponentComponent implements OnInit {

  //non posso definire un array di oggetti, quindi creo una interfaccia e la uso come tipo
  questions: Array<Question>;
  error: string;
  constructor() { }

  //ngOnInit serve per fare qualcosa quando il componente è montato
  //lifecycle sono metodi che ci permettono di fare operazioni
  ngOnInit(): void {
    //se la chiamata va a buon fine mi ritorna il risultato altrimenti ritorna lo status dell'errore
    fetch('http://localhost:3000/question?id=3')
      .then(
        response => {
          if (!response.ok) {
            throw Error(response.statusText)
          }
          return response.json()
        })
      .then((json: Array<Question>) => {
        this.questions = json;
      }).catch(err => this.error = err);
  }
}
