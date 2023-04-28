import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GreetingsComponent } from './greetings/greetings.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'angular-dialog';


 constructor(private matDialog: MatDialog
) {}


onOpenDialogClick() {
  let dialogRef = this.matDialog.open(GreetingsComponent,
  {
      data:{
        age:13,
        name: "Giana"
      },

      width: "500px",
      height: "500px",
      position: {
        top: "0",
        left: "0"
      },

      disableClose: true,
      hasBackdrop: false
  }
);


  dialogRef.afterClosed().subscribe(
  result=> {
  }
  );
}
}

