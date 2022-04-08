import { Location } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { SegmentDirective } from './segment.directive';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
})
export class RouterComponent implements AfterContentInit {
  @Input() baseRoute = '';

  @ContentChildren(SegmentDirective)
  segments!: QueryList<SegmentDirective>;

  currentSegment?: TemplateRef<any>;

  private currentPath = '';

  constructor(private location: Location) {}

  ngAfterContentInit(): void {
    this.location.onUrlChange((url) => {
      this.currentPath = url.trim().split(this.baseRoute)[1].replace('/', '');

      this.renderComponent();
    });

    this.renderComponent();
  }

  private renderComponent() {
    const currentComponent = this.segments.find(
      (item) => item.path === this.currentPath
    );

    if (currentComponent) {
      this.currentSegment = currentComponent.templateRef;
    }
  }
}
