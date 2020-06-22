import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../services/data.service";
import { Museum } from "../models/museum";

@Component({
  selector: "app-museum-detail",
  templateUrl: "./museum-detail.component.html",
  styleUrls: ["./museum-detail.component.css"],
})
export class MuseumDetailComponent implements OnInit {
  public museum: Museum;
  // museumRef: string;
  // museumTitle: string;
  // opening: string;
  // adress: string;
  // city: string;
  // zip: string;
  // telephone: string;
  // website: string;
  // fax: string;
  // museumLocation: number[];
  // museumPopUpName: string;
  // museumPopUpAdres: string;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    const museum_id = this.route.snapshot.params["museum_id"];

    this.dataService.fetchMuseumById(museum_id).subscribe(
      (res) => {
        // console.log(res);
        this.museum = res;
      },
      (error) => {
        "Error Try Again";
      }
    );
    // const museumRef = this.route.snapshot.params["reference"];
    // this.museumTitle = this.museumService.getMuseumByRef(museumRef).name;
    // this.opening = this.museumService.getMuseumByRef(museumRef).opening;
    // this.adress = this.museumService.getMuseumByRef(museumRef).adress;
    // this.zip = this.museumService.getMuseumByRef(museumRef).zip;
    // this.city = this.museumService.getMuseumByRef(museumRef).city;
    // this.fax = this.museumService.getMuseumByRef(museumRef).fax;
    // this.telephone = this.museumService.getMuseumByRef(museumRef).telephone;
    // this.website = this.museumService.getMuseumByRef(museumRef).website;
    // this.museumLocation = this.museumService.getMuseumByRef(
    //   museumRef
    // ).cardinals;
    // this.museumPopUpName = this.museumService.getMuseumByRef(museumRef).name;
    // this.museumPopUpAdres =
    //   this.museumService.getMuseumByRef(museumRef).adress + this.museumTitle;
  }
}
