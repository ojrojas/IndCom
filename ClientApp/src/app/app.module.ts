import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { NavTopComponent } from './nav-top/nav-top-component';
import { ModuloUsuario } from './usuario/usuario.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { youtubeSearchInjectables } from './youtube/youtube-search.injectables';
import { YoutubeSearchComponent } from './youtube/youtube-search.component';
import { SearchBoxComponent } from './youtube/serch-box-component';
import { SearchResultComponent } from './youtube/search-result.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    NavTopComponent,
    YoutubeSearchComponent,
    SearchBoxComponent,
    SearchResultComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ModuloUsuario,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'usuario', component: UsuarioComponent, pathMatch: 'full' },
      { path: 'youtube', component: YoutubeSearchComponent, pathMatch: 'full' }

    ])
  ],
  bootstrap: [AppComponent],
  providers: [youtubeSearchInjectables]
})
export class AppModule { }
