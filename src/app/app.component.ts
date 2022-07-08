import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { GameDetailsActions } from './store/gameDetails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'clicker-game';

  constructor(private readonly store: Store<AppState>) {}

  public increaseFQLevel() {
    this.store.dispatch(
      GameDetailsActions.INCREASE_FERTILIZER_QUALITY_LEVEL({ value: 1 })
    );
  }
}
