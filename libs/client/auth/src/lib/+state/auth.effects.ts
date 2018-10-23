import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { AuthState } from './auth.reducer';
import {
  Login,
  LoginSuccess,
  LoginError,
  AuthActionTypes
} from './auth.actions';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.dataPersistence.fetch(AuthActionTypes.Login, {
    run: (action: Login, state: AuthState) => {
      return this.authService.login().pipe(
        map(user => {
          return new LoginSuccess(user);
        })
      );
    },

    onError: (action: Login, error) => {
      console.error('Error', error);
      return new LoginError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AuthPartialState>,
    private authService: AuthService
  ) {}
}
