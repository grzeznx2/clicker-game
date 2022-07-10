import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectGameDetails } from 'src/app/store/gameDetails/gameDetails.selectors';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent implements OnInit {
  public gameDetails$ = this.store.select(selectGameDetails);

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {}
}
