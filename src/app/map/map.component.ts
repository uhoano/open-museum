import { Component, AfterViewInit, Input } from "@angular/core";

import { MuseumService } from "../services/openmuseum.service";

import * as L from "leaflet";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"],
})
export class MapComponent implements AfterViewInit {
  @Input() museumLocation: number[];
  @Input() museumPopUpName: string;
  @Input() museumPopUpAddress: string;

  private map: any;
  constructor(private museumService: MuseumService) {}

  private initMap(): void {
    this.map = L.map("map", {
      center: [this.museumLocation[0], this.museumLocation[1]],
      zoom: 13,
    });
    const tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );
    tiles.addTo(this.map);
    const marker = L.marker(this.museumLocation);
    marker.addTo(this.map);
    marker
      .bindPopup(
        "<p>" +
          this.museumPopUpName +
          "</p> <p>" +
          this.museumPopUpAddress +
          "</p>"
      )
      .openPopup();
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
