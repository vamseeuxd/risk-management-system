import { Component } from "@angular/core";

import {
  AlertController,
  LoadingController,
  PopoverController,
} from "@ionic/angular";

import { HttpClient } from "@angular/common/http";

@Component({
  selector: "page-document-risk",
  templateUrl: "document-risk.html",
  styleUrls: ["./document-risk.scss"],
})
export class DocumentRiskPage {
  documentName = "";
  isModalOpen = false;
  analysis = "";
  risk_level = "";
  selectedFile: File[] = [];
  constructor(
    public http: HttpClient,
    public loadingCtrl: LoadingController,
    private alertController: AlertController
  ) {}
  async analyzeSecurity() {
    this.analysis = "";
    this.risk_level = "";
    const loading = await this.loadingCtrl.create({
      message: "Please wait while we analyze the security of the document...",
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

  async onDocsSelection($event) {
    const duplicateDocs = [];
    console.log("Selected files", $event.currentTarget.files);
    if (this.selectedFile.length === 0) {
      this.selectedFile = [...$event.currentTarget.files];
      ($event.currentTarget as HTMLInputElement).value = null;
    } else {
      [...this.selectedFile].forEach((f) => {
        [...$event.currentTarget.files].forEach((ff) => {
          if (f.name === ff.name) {
            duplicateDocs.push(ff.name);
            console.log("Duplicate file found", ff);
          } else {
            this.selectedFile.push(ff);
            console.log("File added", ff);
          }
        });
      });
      ($event.currentTarget as HTMLInputElement).value = null;
      if (duplicateDocs.length > 0) {
        const alert = await this.alertController.create({
          message: `The following documents are already selected: ${duplicateDocs.join(
            ", "
          )}`,
          buttons: ["OK"],
        });
        await alert.present();
      }
    }
  }
  async deleteFile(doc: File) {
    const alert = await this.alertController.create({
      message: `Are you sure you want to delete ${doc.name}?`,
      buttons: [
        {
          text: "Yes",
          handler: () => {
            this.selectedFile = this.selectedFile.filter(
              (f) => (f.name !== doc.name)
            );
          },
        },
        "No",
      ],
    });
    await alert.present();
  }
}
