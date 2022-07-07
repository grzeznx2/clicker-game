import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { pluck } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { selectExpadingFarm } from 'src/app/store/gameDetails/gameDetails.selectors';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.scss'],
})
export class FarmComponent implements OnInit {
  public farmLevels!: number[];
  public expandingFarm$ = this.store.select(selectExpadingFarm);

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.expandingFarm$.pipe(pluck('level')).subscribe((level) => {
      this.farmLevels = Array.from({ length: level }, () => 1);
    });
  }
}
