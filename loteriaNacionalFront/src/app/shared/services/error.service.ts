import { Injectable } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorComponent } from '../components/error/error.component';
@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(public dialog: MatDialog) {}
  open(msg: any) {
    let dialogRef = this.dialog.open(ErrorComponent, {
      data: {
        msg,
      },
      width: '100%',
    });
    dialogRef.afterClosed().subscribe((data) => {
    });
  }

}
