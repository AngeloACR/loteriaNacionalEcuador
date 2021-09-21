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
          localStorage.setItem('exaToken', token)
          this.router.navigateByUrl(`${url}/${token}`);
        }
        if (data.includes("payment/detalle?ticketId")) {
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
  async ngOnInit() {}
}
