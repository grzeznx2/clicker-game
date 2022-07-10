import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AppState } from './store/app.state';
import { gameDetailsReducer } from './store/gameDetails';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FarmComponent } from './features/farm/farm.component';
import { GrassBladeComponent } from './features/farm/grass-blade/grass-blade.component';
import { currentLevelReducer } from './store/currentLevel';
import { EffectsModule } from '@ngrx/effects';
import { ScreenComponent } from './features/screen/screen.component';
import { HeaderComponent } from './features/header/header.component';
import { CurrentLevelEffects } from './store/currentLevel/currentLevel.effects';
import { UpgradesComponent } from './features/upgrades/upgrades.component';
import { GameDetailsComponent } from './features/upgrades/game-details/game-details.component';
import { UpgradeComponent } from './features/upgrades/upgrade/upgrade.component';

@NgModule({
  declarations: [
    AppComponent,
    FarmComponent,
    GrassBladeComponent,
    ScreenComponent,
    HeaderComponent,
    UpgradesComponent,
    GameDetailsComponent,
    UpgradeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot<AppState>(
      {
        gameDetails: gameDetailsReducer,
        currentLevel: currentLevelReducer,
      },
      {}
    ),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CurrentLevelEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
