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

  constructor() {}

  ngOnInit(): void {
    interval(1000).subscribe(() => {
      if (this.segments.length < this.maxSegmentsCount) {
        this.segments = [...this.segments, 1];
      }
    });
  }
}
