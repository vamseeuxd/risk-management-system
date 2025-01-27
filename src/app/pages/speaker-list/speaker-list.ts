import { Component } from "@angular/core";
import { ConferenceData } from "../../providers/conference-data";
import { HttpClient } from "@angular/common/http";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "page-speaker-list",
  templateUrl: "speaker-list.html",
  styleUrls: ["./speaker-list.scss"],
})
export class SpeakerListPage {
  vendorName = "";
  isModalOpen = false;
  analysis = "";
  risk_level = "";
  constructor(
    public http: HttpClient,
    public loadingCtrl: LoadingController
  ) {}
  async analyzeSecurity() {
    this.analysis = "";
    this.risk_level = "";
    const loading = await this.loadingCtrl.create({
      message: 'Please wait while we analyze the security of the vendor...',
      duration: 2000,
    });

    loading.present();
    setTimeout(() => {
      this.analysis =
        "Cognizant has faced several security breaches, including a ransomware attack in 2020 that affected its operations.";
      this.risk_level =
        "These incidents highlight the need for Cognizant to enhance its cybersecurity measures to protect client and employee data.";
      this.isModalOpen = true;
      loading.dismiss();
    }, 2000);
    this.http
      .post(
        "https://97e2-2406-7400-1c3-6062-c91a-dbe0-4c3-7428.ngrok-free.app/analyze_security",
        {
          text: "cognizant",
        }
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
