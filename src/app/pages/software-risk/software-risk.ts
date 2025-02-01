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

  is_vulnerable = "";
  severity = "";
  explanation = "";
  cvss_score = 0;

  constructor(
    public http: HttpClient,
    public loadingCtrl: LoadingController,
    private alertController: AlertController
  ) {}
  async analyzeSecurity() {
    this.is_vulnerable = "";
    this.severity = "";
    this.explanation = "";
    this.cvss_score = 0;

    const loading = await this.loadingCtrl.create({
      message: "Please wait while we analyze the security of the software...",
      duration: 2000,
    });

    loading.present();
    this.http
      .post(
        "https://a1b3-2406-7400-1c3-c726-5c3c-eefe-23fb-647e.ngrok-free.app/check_vulnerability",
        {
          product: this.softwareName,
          software: this.softwareTechStack,
        }
      )
      .subscribe(
        (data: any) => {
          console.log(data);
          this.is_vulnerable = data.is_vulnerable;
          this.severity = data.severity;
          this.explanation = data.explanation;
          this.cvss_score = Number(data.cvss_score);
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
  "is_vulnerable": "YES",
  "severity": "HIGH",
  "explanation": "I've checked the National Vulnerability Database (NVD) and GitHub Security Advisory Database for Google-related security vulnerabilities.\n\n1. Is it vulnerable: YES\n2. Severity: HIGH\nGoogle Chrome, use-after-free vulnerability in Chrome's browser engine (CVE-2022-3075), allows remote attackers to potentially execute arbitrary code on affected systems, posing significant security risks to users. This vulnerability affects Google Chrome browser, specifically versions prior to 104.0.5112.102."
} */
