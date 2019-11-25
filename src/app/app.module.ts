import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SideOptionsComponent } from './side-options/side-options.component';
import { SideFiltersComponent } from './side-filters/side-filters.component';
import { UserPicComponent } from './user-pic/user-pic.component';
import { SideSnippetsComponent } from './side-snippets/side-snippets.component';
import { SnippetComponent } from './snippet/snippet.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    SideOptionsComponent,
    SideFiltersComponent,
    UserPicComponent,
    SideSnippetsComponent,
    SnippetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
