import { Component, OnInit } from '@angular/core';
import * as AuthActions from '../../+state/auth.actions';
import { Store } from '@ngrx/store';
import { AuthState } from '../../+state/auth.reducer';
import * as AuthSelectors from '../../+state/auth.selectors';

@Component({
  selector: 'nxt-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  user;
  constructor(private store: Store<AuthState>) {
    // this.store.select('auth').subscribe(data => {
    //   console.log(data.user);
    // });
    // this.store
    //   .select(AuthSelectors.authQuery.getLoggedInUser)
    //   .subscribe(data => {
    //     console.log(data);
    //   });

    this.user = this.store.select(AuthSelectors.authQuery.getLoggedInUser);
  }

  ngOnInit() {}

  signin() {
    this.store.dispatch(new AuthActions.Login());
  }
}
