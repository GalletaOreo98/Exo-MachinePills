import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-cyberia',
  templateUrl: './cyberia.component.html',
  styleUrls: ['./cyberia.component.css']
})
export class CyberiaComponent implements OnInit, AfterViewInit {
  //CANVAS
  @ViewChild('gameCanvas', { static: false })
  canvas!: ElementRef<HTMLCanvasElement>;

  ctx!: CanvasRenderingContext2D | null;

  //AUDIO
  private audio: HTMLAudioElement;
  private currentSong = 1;

  //CANVAS VARS
  isMobile: boolean;

  private background: HTMLImageElement;
  private lain_right_1: HTMLImageElement;
  private lain_right_2: HTMLImageElement;
  private lain_left_1: HTMLImageElement;
  private lain_left_2: HTMLImageElement;
  private tv: HTMLImageElement;

  private readonly CANVAS_SUELO = 472; //Suelo segun el background del canvas
  private readonly INITIAL_CHARACTER_X = 180;

  private character = {
    x: this.INITIAL_CHARACTER_X,
    y: this.CANVAS_SUELO,
    animationTime: 0,
    frameState: "NORMAL",
    isMoving: false,
    isDoingSomething: "IDLE"
  };

  private tvObject = {
    x: 110,
    y: 200
  };

  /*Cuando cambiamos esta variable canvasReadyForDraw se modifica consigo la variable
  canvasChecker y ademas se llama a la funcion firstCanvasDraw() para dibujar en el canvas
  solamente cuando este listo (canvasChecker === true)*/
  canvasChecker: boolean = false;
  @Input()
  set canvasReadyForDraw(value: boolean) {
    this.canvasChecker = value;
    this.firstCanvasDraw();
  }
  canvasObjectsReady = false; //True cuando los objetos a dibujar en el canvas ya esten ajustados y listos para usar
  reductionFactor = 1; //Factor de reduccion que se aplicara al canvas. Mobile x0.5, PC x1 (Original escale)

  // Esta funcion aqui es para solucionar la tardanza de la activacion del evento onload de las imagenes
  prepareCanvasObjects(): Observable<any> {
    return new Observable(observer => {
      this.background.onload = () => {
        console.log("background ready");
        this.lain_right_1.onload = () => {
          console.log("lain_right_1 ready");
          this.tv.onload = () => {
            console.log("tv ready");
            this.adjustCanvasObjects();
            //Definir estilo de textos
            this.ctx!.fillStyle = "white";
            this.ctx!.font = `bold ${(15 * this.reductionFactor)}px Courier New`;
            this.canvasObjectsReady = true;
            this.canvasReadyForDraw = true;
            observer.next();
            observer.complete();
          };
        };
      };
    });
  }
  subscription: Subscription | undefined;

  constructor() {
    this.isMobile = window.matchMedia("(max-width: 768px)").matches;
    this.background = new Image();
    this.lain_right_1 = new Image();
    this.lain_right_2 = new Image();
    this.lain_left_1 = new Image();
    this.lain_left_2 = new Image();
    this.tv = new Image();
    this.audio = new Audio();
    this.audio.src = '/assets/audio/cyberia/lyr1.mp3';
  }

  ngOnInit(): void {
    this.subscription = this.prepareCanvasObjects().subscribe(
      {
        next: () => {
          console.log("Observer prepareCanvasObjects finished");
        },
        error: () => {
          console.log("Error");
        }
      }
    );
    this.loadImages();
  }

  ngAfterViewInit(): void {
    //this.prepareCanvasObjects();
    this.adjustCanvasSize();
    this.ctx = this.canvas.nativeElement.getContext('2d');
    console.log("ngAfterViewInit");
  }

  ngOnDestroy(): void {
    this.audio.pause();
    this.subscription?.unsubscribe();
  }

  //CANVAS ADJUST AND LOAD FUNCTIONS

  /* private prepareCanvasObjects(): void {
    this.background.onload = () => {
      console.log("background ready");
      this.lain_right_1.onload = () => {
        console.log("lain_right_1 ready");
        this.tv.onload = () => {
          console.log("tv ready");
          this.adjustCanvasObjects();
          //Definir estilo de textos
          this.ctx!.fillStyle = "white";
          this.ctx!.font = `bold ${(15 * this.reductionFactor)}px Courier New`;
          this.canvasObjectsReady = true;
          this.canvasReadyForDraw = true;
        };
      };
    };
  } */

  private loadImages(): void {
    //Imagenes iniciales
    this.background.src = 'assets/images/cyberia/background.png';
    this.lain_right_1.src = 'assets/images/cyberia/lain_right_1.png';
    this.tv.src = 'assets/images/cyberia/tv.png';
    //Demas imagenes
    this.lain_right_2.src = 'assets/images/cyberia/lain_right_2.png';
    this.lain_left_1.src = 'assets/images/cyberia/lain_left_1.png';
    this.lain_left_2.src = 'assets/images/cyberia/lain_left_2.png';
  }

  private adjustCanvasSize(): void {
    if (this.isMobile) {
      //Ajustar canvas a tamaño dispositivos moviles
      this.canvas.nativeElement.width = 400;
      this.canvas.nativeElement.height = 300;
    } else {
      //Ajustar canvas a tamaño para pc
      this.canvas.nativeElement.width = 800;
      this.canvas.nativeElement.height = 600;
    }
  }

  private adjustCanvasObjects() {
    if (this.isMobile) {
      this.reductionFactor = 0.5;
    } else {
      return;
    }
    this.lain_right_1.width = this.lain_right_1.width * this.reductionFactor;
    this.lain_right_1.height = this.lain_right_1.height * this.reductionFactor;
    this.lain_right_2.width = this.lain_right_2.width * this.reductionFactor;
    this.lain_right_2.height = this.lain_right_2.height * this.reductionFactor;
    this.lain_left_1.width = this.lain_left_1.width * this.reductionFactor;
    this.lain_left_1.height = this.lain_left_1.height * this.reductionFactor;
    this.lain_left_2.width = this.lain_left_2.width * this.reductionFactor;
    this.lain_left_2.height = this.lain_left_2.height * this.reductionFactor;
    this.tv.width = this.tv.width * this.reductionFactor;
    this.tv.height = this.tv.height * this.reductionFactor;
    this.character.x = this.character.x * this.reductionFactor;
    this.character.y = this.character.y * this.reductionFactor;
    this.tvObject.x = this.tvObject.x * this.reductionFactor;
    this.tvObject.y = this.tvObject.y * this.reductionFactor;
  }

  private firstCanvasDraw() {
    // Código para ejecutar cuando cambie la variable this.canvasReadyForDraw
    console.log("canvasReadyForDraw: " + this.canvasChecker);
    this.ctx!.drawImage(this.background, 0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.ctx!.drawImage(this.tv, this.tvObject.x, this.tvObject.y, this.tv.width, this.tv.height);
    this.ctx!.drawImage(this.lain_right_1, this.character.x, this.character.y, this.lain_right_1.width, this.lain_right_1.height);
  }

  //GAME FUNCTIONS
  private updateCharacterAnimation(action: string): void {
    switch (action) {
      case 'MOV_DERECHA':
        this.character.x = this.character.x + 3;
        this.character.animationTime++;

        if (this.character.animationTime == 1) {
          this.character.frameState = 'MOV_DERECHA';
        }
        if (this.character.animationTime == 6) {
          this.character.frameState = 'NORMAL';
          this.character.animationTime = -2;
        }
        break;
      case 'MOV_IZQUIERDA':

        this.character.x = this.character.x - 3;
        this.character.animationTime++;

        if (this.character.animationTime == 1) {
          this.character.frameState = 'MOV_IZQUIERDA';
        }
        if (this.character.animationTime == 6) {
          this.character.frameState = 'NORMAL2';
          this.character.animationTime = -2;
        }
        break;
      case 'STOP':
        switch (this.character.frameState) {
          case 'MOV_DERECHA':
            this.character.frameState = 'NORMAL'
            break;
          case 'MOV_IZQUIERDA':
            this.character.frameState = 'NORMAL2'
            break;
          default:
            break;
        }
        this.character.animationTime = 0;
        break;
      default:
        break;
    }
  }

  private drawCharacter(): void {
    switch (this.character.frameState) {
      case 'NORMAL':
        this.ctx!.drawImage(this.lain_right_1, this.character.x, this.character.y, this.lain_right_1.width, this.lain_right_1.height);
        break;
      case 'MOV_DERECHA':
        this.ctx!.drawImage(this.lain_right_2, this.character.x, this.character.y, this.lain_right_2.width, this.lain_right_2.height);
        break;
      case 'NORMAL2':
        this.ctx!.drawImage(this.lain_left_1, this.character.x, this.character.y, this.lain_left_1.width, this.lain_left_1.height);
        break;
      case 'MOV_IZQUIERDA':
        this.ctx!.drawImage(this.lain_left_2, this.character.x, this.character.y, this.lain_left_2.width, this.lain_left_2.height);
        break;
      default:
        break;
    }
  }

  private drawCanvasBackground(): void {
    this.ctx!.drawImage(this.background, 0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    //Objetos y textos
    //(No importa que tv este sobre el texto ya que la pantall del tv es semitransparente)
    this.ctx!.fillText(`Sewerslvt - Cyberia lyr${this.currentSong}`, 200 * this.reductionFactor, 250 * this.reductionFactor);
    this.ctx!.drawImage(this.tv, this.tvObject.x, this.tvObject.y, this.tv.width, this.tv.height);

  }

  private clearCanvas(): void {
    this.ctx!.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }

  play(action: string): void {
    if (!this.canvasObjectsReady) return;
    if (this.character.isMoving) return;
    if (this.character.x > this.INITIAL_CHARACTER_X * this.reductionFactor && action == "MOV_DERECHA") return;
    if (this.character.x <= this.INITIAL_CHARACTER_X * this.reductionFactor && action == "MOV_IZQUIERDA") return;
    this.character.isMoving = true;
    this.slowLoopExecution(action);
  }

  private stopCharachter(): void {
    this.clearCanvas();
    this.drawCanvasBackground();
    this.updateCharacterAnimation("STOP");
    this.drawCharacter();
  }

  private async slowLoopExecution(action: string): Promise<void> {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    const totalIterations = 60 * this.reductionFactor; //Practicamente es la distancia que se va a mover

    if (action === "MOV_IZQUIERDA") {
      this.audio.pause();
      if (this.character.isDoingSomething === "DANCING") {
        //Si esta bailando avisa que dejara de bailar y espera 370 ms que es lo maximo que podria tardar el paso de baile
        this.character.isDoingSomething = "";
        await delay(370);
      }
    }

    //animacion que se hara segun la variable "action" que recibimos a traves del boton html
    for (let i = 0; i < totalIterations; i++) {
      this.clearCanvas();
      this.drawCanvasBackground();
      this.updateCharacterAnimation(action);
      this.drawCharacter();
      await delay(85); // Tiempo entre animaciones en milisegundos
    }

    this.stopCharachter();
    this.character.isMoving = false;

    if (action === "MOV_DERECHA") {
      this.audio.play();
      this.characterDance();
    }

  }

  private async characterDance() {
    let ladoBaile = true;
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    this.character.isDoingSomething = "DANCING";
    while (this.character.isDoingSomething === "DANCING") {
      if (ladoBaile) {
        this.clearCanvas();
        this.drawCanvasBackground();
        this.updateCharacterAnimation("MOV_IZQUIERDA");
        this.drawCharacter();
        await delay(185);
        this.clearCanvas();
        this.drawCanvasBackground();
        this.updateCharacterAnimation("STOP");
        this.drawCharacter();
        await delay(185);
        ladoBaile = false;
      } else {
        this.clearCanvas();
        this.drawCanvasBackground();
        this.updateCharacterAnimation("MOV_DERECHA");
        this.drawCharacter();
        await delay(185);
        this.clearCanvas();
        this.drawCanvasBackground();
        this.updateCharacterAnimation("STOP");
        this.drawCharacter();
        await delay(185);
        ladoBaile = true;
      }
    }
  }

  nextSong(): void {
    if (this.character.x <= this.INITIAL_CHARACTER_X * this.reductionFactor) return;
    this.currentSong++;
    if (this.currentSong > 3) {
      this.currentSong = 1;
    }
    this.audio.src = `/assets/audio/cyberia/lyr${this.currentSong}.mp3`
    this.audio.play();
  }

}
