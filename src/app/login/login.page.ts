import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  private senha = "";
  private email = "";

  constructor(private router: Router, public toastController: ToastController) {}

  async acessoIncorreto() {
    const toast = await this.toastController.create({
      message: 'E-mail ou senha incorretos!',
      duration: 2000
    });
    toast.present();
  }

  entrar() {

    if (this.email === 'eli@gmail.com' && this.senha === 'eli') {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['home']);
       this.acessoIncorreto();
       console.log(this.email);
       console.log(this.senha);
    }
  }

}
