import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './containers/signin/signin.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: SigninComponent }
    ])
  ],
  declarations: [SigninComponent, SigninFormComponent]
})
export class ClientAuthModule {}
