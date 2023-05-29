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

  //Canvas vars
  background = new Image();
  lain_right_1 = new Image();
  lain_right_2 = new Image();
  lain_left_1 = new Image();
  lain_left_2 = new Image();
  tv = new Image();
  readonly CANVAS_SUELO = 472;
  character = {
    x: 180,
    y: this.CANVAS_SUELO,
    animationTime: 0
  };
  tvObject = {
    x: 110,
    y: 200,
  };
  isFirstCanvasDraw = true;

  constructor() { }

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.loadImages();
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    this.adjustCanvasSize(isMobile);
    this.adjustCanvasObjects(isMobile);
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

  private adjustCanvasSize(isMobile: boolean): void {
    if (isMobile) {
      // Ajustar el tamaño del canvas al % del ancho y al % del alto de la pantalla en dispositivos móviles
      this.canvas.nativeElement.width = 400;
      this.canvas.nativeElement.height = 300;
    } else {
      // Ajustar canvas a tamaño para pc
      this.canvas.nativeElement.width = 800;
      this.canvas.nativeElement.height = 600;
    }
  }

  private adjustCanvasObjects(isMobile: boolean) {
    if (!isMobile) return;
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

}
