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
  files: any = [];
  image: any = [];
  status: boolean = false;
  type: boolean = false;
  constructor(private administracionService: AdministracionService) {}

  async ngOnInit() {
    this.status = await this.administracionService.getPopupStatus();
    this.type = await this.administracionService.getPopupType();
    await this.getFiles();
  }

  async deleteImage(image: string) {
    let response = await this.deleteImage(image);
    console.log(response);
  }
  async getFiles() {
    this.files = await this.administracionService.getPopupFiles();
    console.log(this.files);
  }
  async setImage(image: string) {
    let response = await this.setImage(image);
    console.log(response);
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

  async changePopupStatus() {
    await this.administracionService.setPopupStatus(this.status);
  }
  async changePopupType() {
    await this.administracionService.setPopupType(this.type);
  }
}
