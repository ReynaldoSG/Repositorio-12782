import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Importaciones de componentes
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';



import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { TablaComponent } from './tabla/tabla.component';

//Cuando se agrega una nueva pagina al sitio se agrega aqui
const appRoutes: Routes=[
  {path:'inicio', component:InicioComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'login', component:LoginComponent},
  {path:'menu', component:MenuComponent},
  {path:'tabla', component:TablaComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    LoginComponent,
    MenuComponent,
    TablaComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{enableTracing: true}),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatChipsModule,
    MatDividerModule,
    MatTabsModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule

  ],
  exports: [
    RouterModule
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
