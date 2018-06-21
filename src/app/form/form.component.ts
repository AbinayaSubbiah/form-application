import { Component } from "@angular/core";
import { FormDetails, form1 } from "./../services/data.services";
import { Router } from "@angular/router";

@Component({
  selector: "my-app",
  templateUrl: "./form.component.html",
  providers: [FormDetails]
})
export class FormComponent {
  model: form1;
  constructor(private formd: FormDetails, private router: Router) {
    this.model = new form1(2, "", "", "");
  }
  onSubmit() {
    this.formd.addData(this.model);
    this.router.navigate(["/home"]);
  }
}
