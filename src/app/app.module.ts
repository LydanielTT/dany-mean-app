import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MongodbComponent } from './mongodb/mongodb.component';
import { MongodbService } from './mongodb.service';
import { ListsComponent } from './lists/lists.component';
import { StoneDetailComponent } from './stone-detail/stone-detail.component';

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MongodbComponent
  },
  {
    path: 'homelist',
    component: ListsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MongodbComponent,
    ListsComponent,
    StoneDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [MongodbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
