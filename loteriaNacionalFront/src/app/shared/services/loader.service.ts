import { Injectable } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoaderComponent } from '../components/loader/loader.component';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  constructor(public dialog: MatDialog) {}
  open(message: any, loader: string) {
    let dialogRef = this.dialog.open(LoaderComponent, {
      data: {
        message,
        loader,
      },
      width: '100%',
    });
    return dialogRef;
  }
  close(dialogRef: any) {
    console.log("cerrando loader")
    dialogRef.close();
  }
}
