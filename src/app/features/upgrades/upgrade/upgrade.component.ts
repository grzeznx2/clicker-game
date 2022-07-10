import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { GameDetailName, Upgrade } from 'src/app/store/gameDetails';
import {
  selectGameDetailCost,
  selectGameDetailLevelsAvailable,
  selectGameDetailNextLevelIncrease,
  selectGameDetailValue,
} from 'src/app/store/gameDetails/gameDetails.selectors';

@Component({
  selector: 'app-upgrade[upgrade]',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss'],
})
export class UpgradeComponent implements OnInit {
  @Input() upgrade!: Upgrade;
  @Input() upgradeName!: GameDetailName;
  public value$!: Observable<number>;
  public cost$!: Observable<number>;
  public nextLevelIncrease$!: Observable<number>;
  public levelsAvailable$!: Observable<number>;

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.value$ = this.store.select(selectGameDetailValue(this.upgradeName));
    this.cost$ = this.store.select(selectGameDetailCost(this.upgradeName));
    this.nextLevelIncrease$ = this.store.select(
      selectGameDetailNextLevelIncrease(this.upgradeName)
    );
    this.levelsAvailable$ = this.store.select(
      selectGameDetailLevelsAvailable(this.upgradeName)
    );
  }
}
