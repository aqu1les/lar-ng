import {
  AfterViewInit,
  Component,
  ElementRef,
  Injector,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MODULES } from './pages/modules';

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
    const componentName = this.elementRef.nativeElement.getAttribute('module')!;
    const module = await MODULES[componentName]();

    this.container.createComponent(module.entry, {
      injector: this.injector,
    });
  }
}
