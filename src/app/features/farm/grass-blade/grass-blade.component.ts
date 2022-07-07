import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grass-blade',
  templateUrl: './grass-blade.component.html',
  styleUrls: ['./grass-blade.component.scss'],
})
export class GrassBladeComponent implements OnInit {
  public segments = [1];

  constructor() {}

  ngOnInit(): void {}
}
