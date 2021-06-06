import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string, error: boolean, duration: number) {
    this.snackBar.open(message, "", {
      duration,
      panelClass: error ? 'snackbar-error' : 'snackbar-success',
    });
  }

  handleError(error: any) {
    if (error.msg) {
      const errorMessage = error.msg;
      this.openSnackBar(errorMessage, true, 2000);
    } else {
      this.openSnackBar('Something went wrong!! Check Console', true, 2000);
      console.error(error);
    }
  }


}
