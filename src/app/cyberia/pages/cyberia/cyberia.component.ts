import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cyberia',
  templateUrl: './cyberia.component.html',
  styleUrls: ['./cyberia.component.css']
})
export class CyberiaComponent implements OnInit, AfterViewInit {

  @ViewChild('gameCanvas', { static: false })
  canvas!: ElementRef<HTMLCanvasElement>;

  ctx!: CanvasRenderingContext2D | null;

  isMobile: boolean | undefined;

  //Canvas vars
  background = new Image();
  lain_right_1 = new Image();
  lain_right_2 = new Image();
  lain_left_1 = new Image();
  lain_left_2 = new Image();
  tv = new Image();
  readonly CANVAS_SUELO = 472;
  readonly INITIAL_CHARACTER_X = 180;
  character = {
    x: this.INITIAL_CHARACTER_X,
    y: this.CANVAS_SUELO,
    animationTime: 0,
    estado: "NORMAL",
    isMoving: false
  };
  tvObject = {
    x: 110,
    y: 200,
  };
  isFirstCanvasDraw = true;

  constructor() {
    this.isMobile = window.matchMedia("(max-width: 768px)").matches;
  }

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.loadImages();
    //const isMobile = window.matchMedia("(max-width: 768px)").matches;
    this.adjustCanvasSize();
    this.adjustCanvasObjects();
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    if (this.isFirstCanvasDraw) {
      this.firstCanvasDraw();
      this.isFirstCanvasDraw = false;
      console.log("ngAfterViewChecked");
    }
  }

  ngOnInit(): void {
  }

  private firstCanvasDraw(): void {
    this.background.onload = () => {
      this.ctx!.drawImage(this.background, 0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    };

    this.lain_right_1.onload = () => {
      this.ctx!.drawImage(this.lain_right_1, this.character.x, this.character.y, this.lain_right_1.width, this.lain_right_1.height);
    };

    this.tv.onload = () => {
      this.ctx!.drawImage(this.tv, this.tvObject.x, this.tvObject.y, this.tv.width, this.tv.height);
    };
  }

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
      // Ajustar el tamaño del canvas al % del ancho y al % del alto de la pantalla en dispositivos móviles
      this.canvas.nativeElement.width = 400;
      this.canvas.nativeElement.height = 300;
    } else {
      // Ajustar canvas a tamaño para pc
      this.canvas.nativeElement.width = 800;
      this.canvas.nativeElement.height = 600;
    }
  }

  private adjustCanvasObjects() {
    if (!this.isMobile) return;
    this.lain_right_1.width = this.lain_right_1.width * 0.5;
    this.lain_right_1.height = this.lain_right_1.height * 0.5;
    this.lain_right_2.width = this.lain_right_2.width * 0.5;
    this.lain_right_2.height = this.lain_right_2.height * 0.5;
    this.lain_left_1.width = this.lain_left_1.width * 0.5;
    this.lain_left_1.height = this.lain_left_1.height * 0.5;
    this.lain_left_2.width = this.lain_left_2.width * 0.5;
    this.lain_left_2.height = this.lain_left_2.height * 0.5;
    this.tv.width = this.tv.width * 0.5;
    this.tv.height = this.tv.height * 0.5;
    this.character.x = this.character.x * 0.5;
    this.character.y = this.character.y * 0.5;
    this.tvObject.x = this.tvObject.x * 0.5;
    this.tvObject.y = this.tvObject.y * 0.5;
  }

  //GAME FUNCTIONS

  private updateCharacterAnimation(action: string): void {
    switch (action) {
      case 'MOV_DERECHA':
        this.character.x = this.character.x + 3;
        this.character.animationTime++;

        if (this.character.animationTime == 1) {
          this.character.estado = 'MOV_DERECHA';
        }
        if (this.character.animationTime == 6) {
          this.character.estado = 'NORMAL';
          this.character.animationTime = -2;
        }
        break;
      case 'MOV_IZQUIERDA':

        this.character.x = this.character.x - 3;
        this.character.animationTime++;

        if (this.character.animationTime == 1) {
          this.character.estado = 'MOV_IZQUIERDA';
        }
        if (this.character.animationTime == 6) {
          this.character.estado = 'NORMAL2';
          this.character.animationTime = -2;
        }
        break;
      case 'STOP':
        switch (this.character.estado) {
          case 'MOV_DERECHA':
            this.character.estado = 'NORMAL'
            break;
          case 'MOV_IZQUIERDA':
            this.character.estado = 'NORMAL2'
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
    switch (this.character.estado) {
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
    this.ctx!.drawImage(this.tv, this.tvObject.x, this.tvObject.y, this.tv.width, this.tv.height);
  }

  private clearCanvas(): void {
    this.ctx!.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }

  play(action: string): void {
    if(this.character.isMoving) return;
    if(this.character.x > this.INITIAL_CHARACTER_X && action == "MOV_DERECHA") return;
    if(this.character.x <= this.INITIAL_CHARACTER_X && action == "MOV_IZQUIERDA") return;
    this.character.isMoving = true;
    this.slowLoopExecution(action);
  }

  private stopCharachter(): void {
    this.updateCharacterAnimation("STOP");
    this.drawCharacter();
  }

  private async slowLoopExecution(action: string): Promise<void> {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const totalIterations = 60; //Practicamente es la distancia que se va a mover
  
    for (let i = 0; i < totalIterations; i++) {
      // Codigo que deseas ejecutar en cada iteracion del bucle
      this.clearCanvas();
      this.drawCanvasBackground();
      this.updateCharacterAnimation(action);
      this.drawCharacter();
      await delay(85); // Tiempo entre animaciones en milisegundos
    }
    this.stopCharachter();
    this.character.isMoving = false;
  }

}
