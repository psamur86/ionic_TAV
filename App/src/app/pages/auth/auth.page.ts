import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  utilsSvc = inject(UtilsService);

  constructor() { }

  ngOnInit() {
  }

  async submit(){
    if(this.form.valid){
      const user = this.form.value.email;
      this.utilsSvc.saveInLocalStorage('user', user);
      this.utilsSvc.routerLink('/main/home');  
    }
  }
}
