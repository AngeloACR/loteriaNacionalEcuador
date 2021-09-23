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
  token: string;
  faCoffee = faCoffee;
  isDetail: boolean = false;
  constructor(private router: Router) {
    this.isDetail = false;
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        let data = decodeURIComponent(event.url);
        if (data.includes("compra_tus_juegos?token")) {
          let url = data.split("?token=")[0];
          this.token = data.split("?token=")[1];
          this.router.navigateByUrl(`${url}/${this.token}`);
        }
        if (data.includes("payment/detalle?ticketId")) {
          this.isDetail = true;
          let url = data.split("?ticketId=")[0];
          let ticketId = data.split("?ticketId=")[1];
          this.router.navigateByUrl(`${url}/${ticketId}`);
        }        
      }
      if (event instanceof NavigationEnd) {
      }
      if (event instanceof NavigationError) {
        console.log(event.error);
      }
    });
  }
  async ngOnInit() {
  }
}
