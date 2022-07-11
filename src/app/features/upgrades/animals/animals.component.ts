import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectGameDetails } from 'src/app/store/gameDetails/gameDetails.selectors';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss'],
})
export class AnimalsComponent implements OnInit {
  public gameDetails$ = this.store.select(selectGameDetails);

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {}
}
