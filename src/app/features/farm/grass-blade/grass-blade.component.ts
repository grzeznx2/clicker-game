import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { interval, switchMap } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { selectFertilizerQualityValue } from 'src/app/store/gameDetails/gameDetails.selectors';

@Component({
  selector: 'app-grass-blade',
  templateUrl: './grass-blade.component.html',
  styleUrls: ['./grass-blade.component.scss'],
})
export class GrassBladeComponent implements OnInit {
  public segments = [1];
  private maxSegmentsCount = 10;

  public constructor(private readonly store: Store<AppState>) {}

  get segmentsCount() {
    return this.segments.length;
  }

  public ngOnInit(): void {
    this.store
      .select(selectFertilizerQualityValue)
      .pipe(switchMap((value) => interval(1000 / value)))
      .subscribe(() => {
        if (this.segmentsCount < this.maxSegmentsCount) {
          this.segments = [...this.segments, 1];
        }
      });
  }

  public harvest(index: number) {
    this.segments = Array.from({ length: this.segmentsCount - 1 - index });
    console.log('EARNED', index + 1);
  }
}
