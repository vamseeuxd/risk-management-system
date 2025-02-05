import { Component } from "@angular/core";
import { ConferenceData } from "../../providers/conference-data";
import { HttpClient } from "@angular/common/http";
import { AlertController, LoadingController } from "@ionic/angular";

@Component({
  selector: "page-vendor-risk",
  templateUrl: "future-prediction.html",
  styleUrls: ["./future-prediction.scss"],
})
export class SpeakerListPage {
  vendorName = "";
  isModalOpen = false;
  explanation = "";
  probability_score = 0;
  constructor(
    public http: HttpClient,
    public loadingCtrl: LoadingController,
    private alertController: AlertController
  ) {}
  async analyzeSecurity() {
    this.explanation = "";
    this.probability_score = 0;
    const loading = await this.loadingCtrl.create({ message: "Please wait while we analyze the security of the vendor...", duration: 2000, });
    loading.present();
    this.http .post( "http://ec2-35-86-107-107.us-west-2.compute.amazonaws.com:8000/predict_security", { name: this.vendorName } )
      .subscribe(
        (data: any) => {
          this.explanation = data.explanation;
          this.probability_score = data.probability_score;
          this.isModalOpen = true;
          loading.dismiss();
        },
        async (error) => {
          loading.dismiss();
          const alert = await this.alertController.create({
            header: "Error",
            message:
              "Error occurred while analyzing the security of the software",
            buttons: ["OK"],
          });
          await alert.present();
        }
      );
  }
}


/* {
  "probability_score": "62",
  "explanation": "Tata Consultancy Services (TCS) has experienced cyber incidents in the past, including a 2019 ransomware attack, which suggests some vulnerabilities in their security posture, contributing to a moderate probability score. However, the company's investments in cybersecurity and compliance with industry standards, such as ISO 27001, have likely improved their defenses, preventing a higher breach probability score."
} */
