import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-lotto-selector",
  templateUrl: "./lotto-selector.component.html",
  styleUrls: ["./lotto-selector.component.scss"]
})
export class LottoSelectorComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  verUltimoBoletin() {
    let sorteo = 4565;
    this.router.navigateByUrl(`/resultados/lotto_boletin/${sorteo}`);
  }
  verResultados() {
    this.router.navigateByUrl(`/resultados/lotto_consulta`);
  }
}
