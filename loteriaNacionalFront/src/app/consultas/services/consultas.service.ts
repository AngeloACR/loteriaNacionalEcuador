import { Injectable } from '@angular/core';
import { ConsultaService as LoteriaService } from 'src/app/juegos/loteria/services/consulta.service';
import { ConsultaService as LottoService } from 'src/app/juegos/lotto/services/consulta.service';
import { ConsultaService as PozoService } from 'src/app/juegos/pozo/services/consulta.service';
import { ConsultaService as RevanchaService } from 'src/app/juegos/pozoRevancha/services/consulta.service';
import { ConsultaService as MillonariaService } from 'src/app/juegos/millonaria/services/consulta.service';
import { ConsultaService as Pega3Service } from 'src/app/juegos/pega3/services/consulta.service';
import { ConsultaService as BingazoService } from 'src/app/juegos/bingazo/services/consulta.service';

@Injectable({
  providedIn: 'root',
})
export class ConsultasService {
  constructor(
    private loteria: LoteriaService,
    private lotto: LottoService,
    private pozo: PozoService,
    private revancha: RevanchaService,
    private bingazo: BingazoService,
    private millonaria: MillonariaService,
    private pega3: Pega3Service,
  ) {}
  async recuperarUltimosResultados() {
    await Promise.all([
      this.loteria.getUltimoResultado(),
      this.lotto.getUltimoResultado(),
      this.pozo.getUltimoResultado(),
      this.bingazo.getData(),
      this.revancha.getUltimoResultado(),
      this.millonaria.getUltimoResultado(),
      this.pega3.getData(),
    ]);
  }
}
