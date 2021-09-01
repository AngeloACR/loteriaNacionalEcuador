import { Component, OnInit } from "@angular/core";
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError
} from "@angular/router";

import { faCoffee } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "loteriaNacionalWeb";
  faCoffee = faCoffee;
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        let data = decodeURIComponent(event.url);
        if (data.includes("compra_tus_juegos?token")) {
          let url = data.split("?token=")[0];
          let token = data.split("?token=")[1];
          this.router.navigateByUrl(`${url}/${token}`);
        }
      }
      if (event instanceof NavigationEnd) {
      }
      if (event instanceof NavigationError) {
        console.log(event.error);
      }
    });
  }
  async ngOnInit() {}
}
