import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectCurrentLevel } from 'src/app/store/currentLevel/currentLevel.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public currentLevelState$ = this.store.select(selectCurrentLevel);

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {}
}
