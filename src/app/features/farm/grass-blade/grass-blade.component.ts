import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  BehaviorSubject,
  concatMap,
  exhaustMap,
  interval,
  mergeMap,
  skipWhile,
  Subject,
  switchMap,
  takeLast,
  tap,
} from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { CurrentLevelActions } from 'src/app/store/currentLevel';
import { selectFertilizerQualityValue } from 'src/app/store/gameDetails/gameDetails.selectors';

@Component({
  selector: 'app-grass-blade',
  templateUrl: './grass-blade.component.html',
  styleUrls: ['./grass-blade.component.scss'],
})
export class GrassBladeComponent implements OnInit {
  public segments = [1];
  private maxSegmentsCount = 10;
  private gateOpen = new BehaviorSubject<boolean>(false);
  private lastEmittedSpeed = 1;
  private currentSpeed$ = new BehaviorSubject(1);

  public constructor(private readonly store: Store<AppState>) {}

  get segmentsCount() {
    return this.segments.length;
  }

  public ngOnInit(): void {
    this.store
      .select(selectFertilizerQualityValue)
      .pipe(tap((speed) => (this.lastEmittedSpeed = speed)))
      .subscribe();

    this.currentSpeed$
      .pipe(
        switchMap((speed) => {
          this.gateOpen.next(true);
          return interval(1000 / speed);
        }),
        tap(console.log)
      )
      .subscribe(() => {
        this.currentSpeed$.next(this.lastEmittedSpeed);
        if (this.segmentsCount < this.maxSegmentsCount) {
          this.segments = [...this.segments, 1];
        }
      });
  }

  public harvest(index: number) {
    this.segments = Array.from({ length: this.segmentsCount - 1 - index });
    this.store.dispatch(
      CurrentLevelActions.HARVEST_GRASS({ value: index + 1 })
    );
    // console.log('EARNED', index + 1);
  }
}
