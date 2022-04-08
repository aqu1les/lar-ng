import {
  AfterViewInit,
  Component,
  ElementRef,
  Injector,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

export const COMPONENTS: { [key: string]: any } = {
  'app-lazy': () =>
    import('./lazy/lazy.component').then((m) => m.LazyComponent),
  'app-doc': () => import('./doc/doc.component').then((m) => m.DocComponent),
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private injector: Injector
  ) {}

  async ngAfterViewInit() {
    const componentName =
      this.elementRef.nativeElement.getAttribute('component')!;

    this.container.createComponent(await COMPONENTS[componentName](), {
      injector: this.injector,
    });
  }
}
