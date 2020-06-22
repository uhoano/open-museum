import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { MuseumService } from "./services/openmuseum.service";

import { AppComponent } from "./app.component";
import { AddMuseumComponent } from "./add-museum/add-museum.component";
import { IndexComponent } from "./index/index.component";
import { MuseumDetailComponent } from "./museum-detail/museum-detail.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { SingleMuseumComponent } from "./single-museum/single-museum.component";
import { MapComponent } from "./map/map.component";

const appRoutes: Routes = [
  { path: "add", component: AddMuseumComponent },
  { path: "singleMuseum", component: SingleMuseumComponent },
  { path: "museumDetail/:museum_id", component: MuseumDetailComponent },
  { path: "", component: IndexComponent },
  { path: "not-found", component: NotFoundComponent }, // A ajouter à la fin des paths (en dernier)
  { path: "**", redirectTo: "not-found" },
];

@NgModule({
  declarations: [
    AppComponent,
    SingleMuseumComponent,
    IndexComponent,
    AddMuseumComponent,
    MuseumDetailComponent,
    NotFoundComponent,
    MapComponent,
  ],

  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],

  providers: [MuseumService],
  bootstrap: [AppComponent],
})
export class AppModule {}
