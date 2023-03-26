import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h2 mat-dialog-title class="mat-primary">Atenção!</h2>
    <mat-dialog-content class="mat-body">{{ data }}</mat-dialog-content>
    <mat-dialog-actions class="mat-dialog-actions">
      <button mat-button mat-dialog-close class="mat-raised-button mat-warn">
        Não
      </button>
      <button
        mat-button
        [mat-dialog-close]="true"
        class="mat-raised-button mat-primary"
      >
        Sim
      </button>
    </mat-dialog-actions>
  `,
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}
}
