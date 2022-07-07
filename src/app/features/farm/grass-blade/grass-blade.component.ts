import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-grass-blade',
  templateUrl: './grass-blade.component.html',
  styleUrls: ['./grass-blade.component.scss'],
})
export class GrassBladeComponent implements OnInit {
  public segments = [1];
  private maxSegmentsCount = 10;

  public constructor() {}

  get segmentsCount() {
    return this.segments.length;
  }

  public ngOnInit(): void {
    interval(1000).subscribe(() => {
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
