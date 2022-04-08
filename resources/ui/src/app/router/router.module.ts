import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterComponent } from './router.component';
import { SegmentDirective } from './segment.directive';

@NgModule({
  declarations: [RouterComponent, SegmentDirective],
  imports: [CommonModule],
  exports: [RouterComponent, SegmentDirective],
})
export class RouterModule {}
