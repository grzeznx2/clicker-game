import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectExpadingFarm } from 'src/app/store/gameDetails/gameDetails.selectors';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.scss'],
})
export class FarmComponent implements OnInit {
  public expandingFarm$ = this.store.select(selectExpadingFarm);

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {}
}
