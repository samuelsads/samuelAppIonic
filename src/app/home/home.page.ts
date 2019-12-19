import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name:string;
  surname:string;
  constructor(public alertController: AlertController) {}

  showModal(){
    console.log("get information",this.name,this.surname);
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'El nombre completo de la persona es',
      message: this.name +" "+ this.surname,
      buttons: ['OK']
    });

    await alert.present();
  }

}
