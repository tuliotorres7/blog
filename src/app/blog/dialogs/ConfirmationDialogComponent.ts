import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-confirmation-dialog',
    template: '<h1 mat-dialog-title> Confirm you action</h1> <div mat-dialog-content> The action is not revertible, are you sure you want to continue ?     </div> <div mat-dialog-actions> <button mat-button type="button" (click)="submit()" color="primary">Submit</button> <button mat-button mat-dialog-close  > Cancel</button> </div>'
})

export class ConfirmationDialogComponent {
    constructor(private dialogRef: MatDialogRef<void>) {
    }

    public submit() {
        this.dialogRef.close(true);

    }
}