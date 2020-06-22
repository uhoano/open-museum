import { Component, OnInit } from "@angular/core";
// import { MuseumService } from "../services/openmuseum.service";
import {} from "rxjs";
import { Museum } from "../models/museum";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"],
})
export class IndexComponent implements OnInit {
  title = "openmuseum";
  public museums: Museum[];

  ngOnInit() {
    // this.museums = this.museumService.museums;

    this.dataService.fetchMuseums().subscribe(
      (res) => {
        // console.log(res);
        this.museums = res;
      },
      (error) => {
        "Error Try Again";
      }
    );
  }

  constructor(private dataService: DataService) {}
}
