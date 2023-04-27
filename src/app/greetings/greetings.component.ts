import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { inject } from 'vue';


@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit{
    constructor(@Inject (MAT_DIALOG_DATA)private data:number 
    ) { }



    ngOnInit(): void {
      alert(this.data);
    }
  }
