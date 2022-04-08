import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[appRouterSegment]',
})
export class SegmentDirective {
  @Input() path = '';

  constructor(public templateRef: TemplateRef<any>) {}
}
