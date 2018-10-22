import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';

export const adminDashboardRoutes: Route[] = [{
  path: '', component: DashboardViewComponent
}];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [DashboardViewComponent]
})
export class AdminDashboardModule {}
