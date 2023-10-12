import {
  Component,
  HostListener,
  ElementRef,
  ViewChild,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
})
export class SubHeaderComponent {
  shouldAddShadow: boolean = false;

  @ViewChild('carousel') carousel: ElementRef;
  @ViewChild('scrollButtonRight') scrollButtonRight: ElementRef;
  @ViewChild('scrollButtonLeft') scrollButtonLeft: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    const scrollButtonLeft = this.scrollButtonLeft.nativeElement as HTMLElement;
    scrollButtonLeft.style.display = 'none';
  }

  scrollImages(direction: string) {
    const scrollAmount = 600;
    const currentScrollLeft = this.carousel.nativeElement.scrollLeft;
    const targetScrollLeft =
      direction === 'right'
        ? currentScrollLeft + scrollAmount
        : currentScrollLeft - scrollAmount;

    this.animateScroll(currentScrollLeft, targetScrollLeft);
  }

  animateScroll(startScrollLeft: number, targetScrollLeft: number) {
    const duration = 500; // Durée de l'animation en millisecondes
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;

      if (elapsedTime < duration) {
        const scrollProgress = this.easeOutQuad(
          elapsedTime,
          startScrollLeft,
          targetScrollLeft - startScrollLeft,
          duration
        );
        this.carousel.nativeElement.scrollLeft = scrollProgress;
        requestAnimationFrame(animate);
      } else {
        this.carousel.nativeElement.scrollLeft = targetScrollLeft;
      }
    };

    requestAnimationFrame(animate);
  }

  easeOutQuad(t: number, b: number, c: number, d: number) {
    t /= d;
    return -c * t * (t - 2) + b;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // position actuelle de défilement
    const scrollPosition = window.scrollY || window.pageYOffset;
    // valeur seuil à partir de laquelle on ajoute la classe CSS
    const scrollThreshold = 20;

    this.shouldAddShadow = scrollPosition > scrollThreshold;
  }

  handleScroll(event: Event) {
    const target = event.target as HTMLElement;
    const scrollButtonRight = this.scrollButtonRight
      .nativeElement as HTMLElement;
    const scrollButtonLeft = this.scrollButtonLeft.nativeElement as HTMLElement;

    // Vérifiez si le défilement atteint la fin du carrousel
    if (target.scrollLeft >= target.scrollWidth - target.clientWidth) {
      // Cachez le bouton
      scrollButtonRight.style.display = 'none';
    } else {
      // Affichez le bouton
      scrollButtonRight.style.display = 'inline-block';
      // Réinitialisez le style du bouton
      scrollButtonRight.style.position = 'relative';
      scrollButtonRight.style.transform = 'none';
      scrollButtonRight.style.display = 'flex';
    }

    if (target.scrollLeft === 0) {
      scrollButtonLeft.style.display = 'none';
    } else {
      scrollButtonLeft.style.display = 'inline-block';
      // Réinitialisez le style du bouton
      scrollButtonLeft.style.position = 'relative';
      scrollButtonLeft.style.transform = 'none';
      scrollButtonLeft.style.display = 'flex';
    }
  }
}
