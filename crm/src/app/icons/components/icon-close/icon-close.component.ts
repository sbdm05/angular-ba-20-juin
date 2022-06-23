import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-close',
  templateUrl: './icon-close.component.html',
  styleUrls: ['./icon-close.component.scss']
})
export class IconCloseComponent implements OnInit {

  // créer une propriété pour stocker l'icône
  public myIcon = faTimes; 

  constructor() { }

  ngOnInit(): void {
  }

}
