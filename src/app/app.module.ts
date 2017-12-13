import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Newpage1Page } from '../pages/newpage1/newpage1';
import { Newpage2Page } from '../pages/newpage2/newpage2';
import { Newpage3Page } from '../pages/newpage3/newpage3';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Newpage1Page,
    Newpage2Page,
    Newpage3Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Newpage1Page,
    Newpage2Page,
    Newpage3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
