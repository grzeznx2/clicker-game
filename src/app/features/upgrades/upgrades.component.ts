import { Component } from '@angular/core';

type AvailableSection = 'GAME DETAILS' | 'ANIMALS';

@Component({
  selector: 'app-upgrades',
  templateUrl: './upgrades.component.html',
  styleUrls: ['./upgrades.component.scss'],
})
export class UpgradesComponent {
  public selectedSection: AvailableSection = 'GAME DETAILS';

  public setSection(section: AvailableSection) {
    this.selectedSection = section;
  }
}
