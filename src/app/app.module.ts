import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AppState } from './store/app.state';
import { gameDetailsReducer } from './store/gameDetails';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FarmComponent } from './features/farm/farm.component';

@NgModule({
  declarations: [AppComponent, FarmComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot<AppState>(
      {
        gameDetails: gameDetailsReducer,
      },
      {}
    ),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
