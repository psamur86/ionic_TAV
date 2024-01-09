import { Component, Input, inject } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent   {
  @Input() title!: string;
  @Input() color: string = 'primary';
  @Input() backButton!: string;
  @Input() isModal!: boolean;

  utilsSvc = inject(UtilsService);

  constructor() { }

  

  dismissModal(){
    this.utilsSvc.dismissModal();
  }

}
