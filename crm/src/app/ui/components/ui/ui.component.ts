import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  // initialiser une propriété open
  public open: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

  // méthode toggle()
  public toggle(){
    console.log('bouton cliqué');
    // opérateur not !
    this.open = !this.open;
    console.log(this.open); 
  }

}
