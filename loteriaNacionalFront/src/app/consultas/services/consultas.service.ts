import { Injectable } from '@angular/core';
import { ConsultaService as LoteriaService } from 'src/app/juegos/loteria/services/consulta.service';
import { ConsultaService as LottoService } from 'src/app/juegos/lotto/services/consulta.service';
import { ConsultaService as PozoService } from 'src/app/juegos/pozo/services/consulta.service';
import { ConsultaService as MillonariaService } from 'src/app/juegos/millonaria/services/consulta.service';

@Injectable({
  providedIn: 'root',
})
export class ConsultasService {
  constructor(
    private loteria: LoteriaService,
    private lotto: LottoService,
    private pozo: PozoService,
    private millonaria: MillonariaService
  ) {}
  async recuperarUltimosResultados() {
    await Promise.all([
      this.loteria.getUltimoResultado(),
      this.lotto.getUltimoResultado(),
      this.pozo.getUltimoResultado(),
      this.millonaria.getUltimoResultado(),
    ]);
  }
}
