import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Inject,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  @Input() msg: String = '';
  @Input() title: String = 'ERROR';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ErrorComponent>
  ) {
    this.msg = this.data.msg;
  }

  ngOnInit() {
    this.msg = this.msg.replace(/^\:/, '');
  }

  close() {
    this.dialogRef.close();
  }
}
