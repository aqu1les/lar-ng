import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '../../router/router.module';

import { MultiModulesComponent } from './multi-modules.component';

@NgModule({
  declarations: [MultiModulesComponent],
  imports: [CommonModule, RouterModule],
})
export class MultiModulesModule {
  static entry = MultiModulesComponent;
}
