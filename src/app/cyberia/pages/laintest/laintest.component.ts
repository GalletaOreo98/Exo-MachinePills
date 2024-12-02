import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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
export class LaintestComponent implements OnInit {
  private audio: HTMLAudioElement;
  @ViewChild('novelContainer') novelContainer!: ElementRef;


  questions: Question[] = [];

  MAX_POINTS_PER_PERSONALITY = 11; // Número maximo de puntos que se pueden obtener por personalidad
  MAX_POINTS_LGL = 3; // Número total de puntos que se pueden obtener para 08-lain-glitch (LGL)

  hasExtravagantPersonality = false;
  extravagantPersonality = '';

  personalityPoints: { [key: string]: number } = {
    LB: 0,//LAIN_BRAVA 
    LO: 0,//LAIN_OSITO
    LG: 0,//LAIN_GATO
    LD: 0,//LAIN_DEPRESIVA
    LT: 0,//LAIN_TORPE
    LN: 0,//LAIN_NARCISISTA
    LV: 0,//LAIN_VIRTUAL
    LGL: 0,//LAIN_GLITCH
    NULL: 0//COMODIN
  };

  personalityImages: { [key: string]: string } = {
    LB: 'assets/images/lain-test/lain-cards/01-lain-brava.png',
    LG: 'assets/images/lain-test/lain-cards/03-lain-gato.png',
    LD: 'assets/images/lain-test/lain-cards/04-lain-depresiva.png',
    LO: 'assets/images/lain-test/lain-cards/02-lain-osito.png',
    LT: 'assets/images/lain-test/lain-cards/05-lain-torpe.png',
    LV: 'assets/images/lain-test/lain-cards/07-lain-virtual.png',
    LN: 'assets/images/lain-test/lain-cards/06-lain-narcisista.png',
    LGL: 'assets/images/lain-test/lain-cards/08-lain-glitch.png'
  };

  testResultImage: string = '';
  finished = false;
  questionsLoaded = false;
  currentQuestionIndex = 0;
  testResult = '';

  // Dialogo inicial
  isDialoguing = true;

  texts: string[] = [
    '(Bien, aquí vamos...)',
    'Hola, veo que has decidido hacer el test de personalidad.',
    'Este test se te presentarán una serie de preguntas y situaciones, para las cuales podras elegir solo una opción.',
    'Incluso si no te sientes identificado con ninguna de las opciones, deberas elegir la que más te parezca.',
    'Piensa bien en cada decisión que tomes, ya que cada una de ellas tendrá un impacto en tu resultado final.',
    'No temas ser sincero, esto solo quedará entre tú y yo...',
    'Bueno, sin más preámbulos, ya puedes comenzar...',
    'Hasta luego.'
  ];
  currentTextIndex = 0;
  fullText = '(Bien, aquí vamos...)';
  displayedText = '(Toca para continuar)';
  charIndex = 0;
  typingSpeed = 30; // Velocidad de escritura (milisegundos)
  
  //Stats bars
  vitality = 100;
  strength = 80;      
  energy = 60;    
  intelligence = 90;

  constructor(private questionService: LaintestService, private renderer: Renderer2) {
    this.audio = new Audio();
    this.audio.src = 'assets/audio/lain-test/blip.mp3';
  }

  ngOnInit(): void {
    this.loadQuestions();
  }

  ngOnDestroy(): void {
    this.audio.pause();
  }

  loadQuestions(): void {
    this.questionService.getQuestions().subscribe((data: Question[]) => {
      this.questions = data;
      this.questionsLoaded = true;
      //console.log(this.personalityPoints);
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
      this.calculateStatsBar();
      this.finished = true;
    }
  }

  getResult(): string {
    let maxPoints = -1;
    let topPersonality: string = '';

    for (let personality in this.personalityPoints) {
      if (this.personalityPoints[personality] > maxPoints) {
        maxPoints = this.personalityPoints[personality];
        topPersonality = personality;
      }
    }

    //console.log(this.personalityPoints);

    this.testResultImage = this.personalityImages[topPersonality];

    //Check if the top personality has the same points as another personality
    for (let personality in this.personalityPoints) {
      if (this.personalityPoints[personality] == maxPoints && personality != topPersonality) {
        this.hasExtravagantPersonality = true;
        this.extravagantPersonality = 'Lain Glitch';
      }
    }

    if(this.personalityPoints['LGL'] >= 3){
      this.hasExtravagantPersonality = true;
      this.extravagantPersonality = 'Lain Glitch';
    }

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

  applyExtravagantPersonality() {
    this.testResult = this.extravagantPersonality;
    this.testResultImage = this.personalityImages['LGL'];
  }

  calculateStatsBar() {
    //Vitalidad: LO, LV
    const totalVitality = this.personalityPoints['LO'] + this.personalityPoints['LV'];
    console.log('Vitalidad:', totalVitality);
    const vitalityPercentage = (totalVitality / (this.MAX_POINTS_PER_PERSONALITY)) * 100;
    console.log('Vitalidad (%):', vitalityPercentage);
    this.vitality = vitalityPercentage;
    //Fuerza: LB, LN
    const totalStrength = this.personalityPoints['LB'] + this.personalityPoints['LN'];
    console.log('Fuerza:', totalStrength);
    const strengthPercentage = (totalStrength / (this.MAX_POINTS_PER_PERSONALITY)) * 100;
    console.log('Fuerza (%):', strengthPercentage);
    this.strength = strengthPercentage;
    //Energia: LT, LD
    let totalEnergy;
    totalEnergy = this.MAX_POINTS_PER_PERSONALITY - this.personalityPoints['LD'];
    this.personalityPoints['LD'] == 5 ? totalEnergy -= 2 : totalEnergy;
    this.personalityPoints['LD'] >= 6 ? totalEnergy = 0 : totalEnergy;
    (this.personalityPoints['LT'] >= 3 && this.personalityPoints['LD'] > 3) ? totalEnergy++ : totalEnergy;
    this.personalityPoints['LT'] >= 5 ? totalEnergy++ : totalEnergy;
    totalEnergy = totalEnergy < 0 ? 0 : totalEnergy;
    console.log('Energia:', totalEnergy);
    const energyPercentage = (totalEnergy / this.MAX_POINTS_PER_PERSONALITY) * 100;
    console.log('Energia (%):', energyPercentage);
    this.energy = energyPercentage;
    //Inteligencia: LG, LGL
    const totalIntelligence = this.personalityPoints['LG'] + this.personalityPoints['LGL'];
    console.log('Inteligencia:', totalIntelligence);
    const intelligencePercentage = (totalIntelligence / ((this.MAX_POINTS_PER_PERSONALITY + this.MAX_POINTS_LGL)/1.2)) * 100;
    console.log('Inteligencia (%):', intelligencePercentage);
    this.intelligence = intelligencePercentage;
  }
  

  // Función para simular el efecto de máquina de escribir
  typeText() {
    if (this.charIndex < this.fullText.length) {
      this.displayedText += this.fullText.charAt(this.charIndex);
      this.charIndex++;
      this.playBlipSound();
      setTimeout(() => this.typeText(), this.typingSpeed);
    }
  }

  advanceText() {
    if (this.charIndex < this.fullText.length) {
      // Si el texto aún no está completo, lo muestra instantáneamente
      this.displayedText = this.fullText;
      this.charIndex = this.fullText.length;
    } else if (this.currentTextIndex < this.texts.length - 1) {
      // Avanza al siguiente bloque de texto
      this.currentTextIndex++;
      this.fullText = this.texts[this.currentTextIndex];
      this.displayedText = '';
      this.charIndex = 0;
      this.typeText();
    } else {
      console.log('Fin del diálogo.');
      this.fadeOutNovel();
      setTimeout(() => this.isDialoguing = false, 1100);
    }
  }

  skipDialogue() {
    console.log('Fin del diálogo.');
    this.isDialoguing = false;
  }

  playBlipSound() {
    this.audio.play();
  }

  fadeOutNovel() {
    this.renderer.addClass(this.novelContainer.nativeElement, 'fade-out');
  }
}
