import { Component } from "@angular/core";

import { AlertController, LoadingController } from "@ionic/angular";

import { HttpClient } from "@angular/common/http";

@Component({
  selector: "page-software-risk",
  templateUrl: "software-risk.html",
  styleUrls: ["./software-risk.scss"],
})
export class SoftwareRiskPage {
  softwareName = "";
  softwareTechStack = "";
  isModalOpen = false;
  analysis = "";
  risk_level = "";
  constructor(
    public http: HttpClient,
    public loadingCtrl: LoadingController,
    private alertController: AlertController
  ) {}
  async analyzeSecurity() {
    this.analysis = "";
    this.risk_level = "";
    const loading = await this.loadingCtrl.create({
      message: "Please wait while we analyze the security of the software...",
      duration: 2000,
    });

    loading.present();
    /* setTimeout(() => {
      this.analysis = "Cognizant has faced several security breaches, including a ransomware attack in 2020 that affected its operations.";
      this.risk_level = "These incidents highlight the need for Cognizant to enhance its cybersecurity measures to protect client and employee data.";
      this.isModalOpen = true;
      loading.dismiss();
    }, 2000); */
    this.http
      .post(
        "https://a1b3-2406-7400-1c3-c726-5c3c-eefe-23fb-647e.ngrok-free.app/check_vulnerability",
        {
          product: this.softwareName,
          software: this.softwareTechStack,
        }
      )
      .subscribe(
        (data) => {
          console.log(data);
          this.analysis =
            "Cognizant has faced several security breaches, including a ransomware attack in 2020 that affected its operations.";
          this.risk_level =
            "These incidents highlight the need for Cognizant to enhance its cybersecurity measures to protect client and employee data.";
          this.isModalOpen = true;
          loading.dismiss();
        },
        async (error) => {
          loading.dismiss();
          const alert = await this.alertController.create({
            header: "Error",
            message: "Error occurred while analyzing the security of the software",
            buttons: ["OK"],
          });
          await alert.present();
        }
      );
  }
}
