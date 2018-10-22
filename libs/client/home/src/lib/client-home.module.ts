import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';

export const clientHomeRoutes: Route[] = [
  {
    path: '',
    component: HomeViewComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HomeViewComponent]
})
export class ClientHomeModule {}
