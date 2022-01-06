import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ModulesModule } from './modules/modules.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    ModulesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
