import { UtilsService } from 'src/app/services/utils.service';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-update-product',
  templateUrl: './add-update-product.component.html',
  styleUrls: ['./add-update-product.component.scss'],
})
export class AddUpdateProductComponent  implements OnInit {
  form = new FormGroup({
    id: new FormControl(''),
    image: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    soldnits: new FormControl('', [Validators.required, Validators.min(0)]),
  });

  utilsSvc = inject(UtilsService);

  constructor() { }

  ngOnInit() {}

  async takePicture(){
    const dataUrl = (await this.utilsSvc.takePicture('Imagen del producto')).dataUrl;
    this.form.controls.image.setValue(dataUrl!);
  }

  submit(){
    console.log(this.form.value);
  }
}
