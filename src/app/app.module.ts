import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';
import { NgxLeafletLocateModule } from '@runette/ngx-leaflet-locate';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './helpers/http.interceptor';
import { RouterModule } from '@angular/router';

export function tokenGetter(): string {

  return localStorage.getItem('token') as string;

}

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    LeafletMarkerClusterModule,
    NgxLeafletLocateModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
