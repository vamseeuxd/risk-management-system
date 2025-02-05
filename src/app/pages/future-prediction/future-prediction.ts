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
  analysis = "";
  risk_level = "";
  sources: string[] = [];
  constructor(
    public http: HttpClient,
    public loadingCtrl: LoadingController,
    private alertController: AlertController
  ) {}
  async analyzeSecurity() {
    this.analysis = "";
    this.risk_level = "";
    const loading = await this.loadingCtrl.create({ message: "Please wait while we analyze the security of the vendor...", duration: 2000, });
    loading.present();
    this.http .post( "http://ec2-35-86-107-107.us-west-2.compute.amazonaws.com:8000/analyze_security", { text: this.vendorName } )
      .subscribe(
        (data: any) => {
          this.analysis = data.analysis;
          this.risk_level = data.risk_level;
          this.sources = data.sources;
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
