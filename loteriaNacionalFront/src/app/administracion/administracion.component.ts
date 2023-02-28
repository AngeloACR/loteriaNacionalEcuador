import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdministracionService } from './services/administracion.service';
@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.scss'],
})
export class AdministracionComponent implements OnInit {
  codigos: any = [];
  showPromo: boolean = false;
  constructor(private administracionService: AdministracionService) {}

  async ngOnInit() {
    this.showPromo = await this.administracionService.getStatus();
    //this.codigos = (await this.administracionService.obtenerCodigos() as any).values
  }

  async imagenesSeleccionadas() {
    const myFiles: any = (document.querySelector('#file') as any)!.files;
    const formData = new FormData();
    if (!Object.keys(myFiles).length) return;
    Object.keys(myFiles).forEach((key) => {
      formData.append(myFiles.item(key).name, myFiles.item(key));
    });

    const response = await this.administracionService.cargarImagenes(formData);
  }
  async generarTxt() {
    this.codigos = this.administracionService.obtenerTxt().subscribe(
      (data: HttpResponse<Blob>) => {
        var fileName = '';
        const contentDisposition = data.headers.get('Content-Disposition');
        if (contentDisposition) {
          const fileNameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
          const matches = fileNameRegex.exec(contentDisposition);
          if (matches != null && matches[1]) {
            fileName = matches[1].replace(/['"]/g, '');
          }
        }

        const blob = new Blob([data.body!], { type: 'text/txt' });
        const element = document.createElement('a');

        element.href = URL.createObjectURL(blob);
        element.download = fileName;
        element.click();
      },
      (error: any) => {
        throw new Error(error.error.message);
      }
    );
  }
  async changePopup() {
    await this.administracionService.setStatus(this.showPromo);
  }
}
