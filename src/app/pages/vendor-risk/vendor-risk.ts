import { Component } from "@angular/core";
import { ConferenceData } from "../../providers/conference-data";
import { HttpClient } from "@angular/common/http";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "page-vendor-risk",
  templateUrl: "vendor-risk.html",
  styleUrls: ["./vendor-risk.scss"],
})
export class SpeakerListPage {
  vendorName = "";
  isModalOpen = false;
  analysis = "";
  risk_level = "";
  constructor(public http: HttpClient, public loadingCtrl: LoadingController) {}
  async analyzeSecurity() {
    this.analysis = "";
    this.risk_level = "";
    const loading = await this.loadingCtrl.create({
      message: "Please wait while we analyze the security of the vendor...",
      duration: 2000,
    });

    loading.present();
    this.http .post( "https://e2de-2406-7400-1c3-c726-5c3c-eefe-23fb-647e.ngrok-free.app/analyze_security", { text: this.vendorName, } )
      .subscribe((data: any) => {
        console.log(data);
        this.analysis = data.analysis;
        this.risk_level = data.risk_level;
        this.isModalOpen = true;
        loading.dismiss();
      });
  }
}
