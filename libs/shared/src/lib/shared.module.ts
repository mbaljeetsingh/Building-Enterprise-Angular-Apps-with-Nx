import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { AboutComponent } from './about/about.component';

export const sharedRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class SharedModule {}
