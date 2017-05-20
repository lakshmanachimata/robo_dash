import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './shared/menu/side-menu.component'
import { TopMenuComponent } from './shared/menu/top-menu.component'
import { BottomMenuComponent } from './shared/menu/bottom-menu.component'
import { DataService } from'./data.service'
import { LoggerService } from'./logger.service'
import { RouterModule, Routes }  from '@angular/router';
import { ScreensComponent } from './screens/screens.component'
import { LeftMenuComponent } from './shared/menu/left-menu.component'

const AppRoutes: Routes = [
  { path: 'screens', component: ScreensComponent },
  { path: 'screen0', loadChildren: './screens/screen0/screen0.module#Screen0Module' },
  { path: 'screen1', loadChildren: './screens/screen1/screen1.module#Screen1Module' },
  { path: 'screen2', loadChildren: './screens/screen2/screen2.module#Screen2Module' },
  { path: 'screen3', loadChildren: './screens/screen3/screen3.module#Screen3Module' },
  { path: 'screen4', loadChildren: './screens/screen4/screen4.module#Screen4Module' },
];

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    TopMenuComponent,
    ScreensComponent,
    BottomMenuComponent,
    LeftMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    DataService,
    LoggerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
