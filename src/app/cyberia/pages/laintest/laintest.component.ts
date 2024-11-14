import { Component, OnInit} from '@angular/core';
import { LaintestService } from './laintest.service'; // Asegúrate de importar el servicio

export interface Question {
  question: string;
  options: Option[];
}

export interface Option {
  text: string;
  personalities: string[];
}

@Component({
  selector: 'app-laintest',
  standalone: true,
  templateUrl: './laintest.component.html',
  styleUrl: './laintest.component.css'
})
export class LaintestComponent implements OnInit{
  questions: Question[] = [];

  personalityPoints: { [key: string]: number } = {
    LB: 0,//LAIN_BRAVA 
    LO: 0,//LAIN_OSITO
    LG: 0,//LAIN_GATO
    LD: 0,//LAIN_DEPRESIVA
    LT: 0,//LAIN_TORPE
    LN: 0,//LAIN_NARCISISTA
    LV: 0,//LAIN_VIRTUAL
    LGL: 0//LAIN_GLITCH
  };

  personalityImages: { [key: string]: string } = {
    LB: 'assets/images/lain-cards/01-lain-brava.png',
    LG: 'assets/images/lain-cards/03-lain-gato.png',
    LD: 'assets/images/lain-cards/04-lain-depresiva.png',
    LO: 'assets/images/lain-cards/02-lain-osito.png',
    LT: 'assets/images/lain-cards/05-lain-torpe.png',
    LV: 'assets/images/lain-cards/07-lain-virtual.png',
    LN: 'assets/images/lain-cards/06-lain-narcisista.png',
    LGL: 'assets/images/lain-cards/08-lain-glitch.png'
  };
  
  testResultImage: string = '';
  finished = false;
  questionsLoaded = false;
  currentQuestionIndex = 0;
  testResult = '';

  constructor(private questionService: LaintestService) { }

  ngOnInit(): void {
    this.loadQuestions();    
  }

  loadQuestions(): void {
    this.questionService.getQuestions().subscribe((data: Question[]) => {
      this.questions = data;
      this.questionsLoaded = true;
      console.log(this.personalityPoints);
      console.log("Total preguntas:", this.questions.length);
    });    
  }

  selectOption(option: any): void {
    option.personalities.forEach((personality: string) => {
      this.personalityPoints[personality]++;
    });
    this.nextQuestion();
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.testResult = this.getResult();
      this.finished = true;
    }
  }

  getResult(): string {
    let maxPoints = -1;
    let topPersonality:string = '';

    for (let personality in this.personalityPoints) {
      if (this.personalityPoints[personality] > maxPoints) {
        maxPoints = this.personalityPoints[personality];
        topPersonality = personality;
      }
    }

    console.log(this.personalityPoints);

    this.testResultImage = this.personalityImages[topPersonality];

    switch (topPersonality) {
      case "LB":
        return "Lain Brava";
      case "LO":
        return "Lain Osito";
      case "LG":
        return "Lain Gato";
      case "LD":
        return "Lain Depresiva";
      case "LT":
        return "Lain Torpe";
      case "LN":
        return "Lain Narcisista";
      case "LV":
        return "Lain Virtual";
      default:
        break;
    }
    
    return topPersonality;
  }
  
}
