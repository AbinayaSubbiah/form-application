import { Component } from "@angular/core";
import { FormDetails } from "./../services/data.services";

@Component({
  selector: "my-app",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [FormDetails]
})
export class HomeComponent {
  datas;
  constructor(private formd: FormDetails) {
    this.formd.getData().subscribe(data => {
      this.datas = data;
    });
  }
}
