import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppStarterService } from './app-starter.service';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        AppRoutingModule,
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: (appStarterService) => {
                return () => new Promise<void>((resolve) => {
                    appStarterService.start().subscribe(() => resolve());
                });
            },
            deps: [AppStarterService],
            multi: true
        },
        AppStarterService, AppStarterService,
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }
