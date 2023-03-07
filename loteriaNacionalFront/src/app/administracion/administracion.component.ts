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
  loadingMessage: string = 'Cargando...';
  isLoading: boolean = false;
  isError: boolean = false;
  errorMessage: string = 'Cargando...';

  constructor(private administracionService: AdministracionService) {}

  async ngOnInit() {
    this.isLoading = true;
    this.status = await this.administracionService.getPopupStatus();
    this.type = await this.administracionService.getPopupType();
    this.isLoading = false;
    await this.getFiles();
  }

  async deleteImage(event: any, image: string) {
    this.isLoading = true;
    let response = await this.administracionService.deletePopupFiles(image);
    this.isLoading = false;
    this.getFiles();
    console.log(response);
  }
  async getFiles() {
    this.isLoading = true;

    this.files = await this.administracionService.getPopupFiles();
    console.log(this.files);
    this.isLoading = false;
  }
  async setImage(event: any, image: string) {
    this.isLoading = true;
    let aux = image.split('/');
    image = aux[aux.length - 1];
    console.log(image);
    let response = await this.administracionService.setPopupImage(image);
    console.log(response);
    this.isLoading = false;
  }

  async imagenesSeleccionadas() {
    this.isLoading = true;
    const myFiles: any = (document.querySelector('#file') as any)!.files;
    const formData = new FormData();
    if (!Object.keys(myFiles).length) return;
    Object.keys(myFiles).forEach((key) => {
      formData.append(myFiles.item(key).name, myFiles.item(key));
    });

    const response = await this.administracionService.cargarImagenes(formData);
    this.isLoading = false;
    await this.getFiles();
  }

  async changePopupStatus() {
    this.isLoading = true;
    await this.administracionService.setPopupStatus(this.status);
    this.isLoading = false;
  }
  async changePopupType() {
    this.isLoading = true;
    await this.administracionService.setPopupType(this.type);
    this.isLoading = false;
  }
  openError(msg: string) {
    this.errorMessage = msg;
    this.isError = true;
  }

  closeError() {
    this.isError = false;
  }
}
