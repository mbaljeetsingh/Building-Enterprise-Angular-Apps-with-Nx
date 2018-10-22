import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './containers/signin/signin.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AUTH_FEATURE_KEY, initialState as authInitialState, authReducer } from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: SigninComponent }
    ]),

    StoreModule.forFeature(AUTH_FEATURE_KEY, authReducer, { initialState: authInitialState }),

    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [SigninComponent, SigninFormComponent]
})
export class ClientAuthModule {}
