import { Component, OnInit } from "@angular/core";

import {
  AlertController,
  LoadingController,
  PopoverController,
} from "@ionic/angular";

import { HttpClient } from "@angular/common/http";
import * as showdown from "showdown";

@Component({
  selector: "page-document-risk",
  templateUrl: "document-risk.html",
  styleUrls: ["./document-risk.scss"],
})
export class DocumentRiskPage {
  documentName = "";
  isModalOpen = false;
  auditor_analysis = "";
  explanation = "";
  risk_score = "";
  selectedFile: File[] = [];
  constructor(
    public http: HttpClient,
    public loadingCtrl: LoadingController,
    private alertController: AlertController
  ) {}
  /* ngOnInit(): void {
    var converter = new showdown.Converter();
    const response = {
      risk_score: "LOW",
      explanation:
        "**Critical Security Assessment Questions:**\n\n1. Are there any potential vulnerabilities in the dependencies or libraries used in the project, and are they properly updated and patched?\n2. Are there ad",
      auditor_analysis:
        "**Critical Security Assessment Questions:**\n\n1. Are there any potential vulnerabilities in the dependencies or libraries used in the project, and are they properly updated and patched?\n2. Are there adequate access controls and authentication mechanisms in place to prevent unauthorized access to the project's code, data, and infrastructure?\n3. How are sensitive data, such as API keys, credentials, or encryption keys, handled and stored in the project?\n4. Are there any insecure coding practices, such as hardcoded passwords or insecure data storage, that could introduce security risks?\n5. Are there any incident response or disaster recovery plans in place to respond to security incidents or downtime, and are they regularly tested and updated?\n\n**Security Assessment of Documents:**\n\nBased on the provided documents, here's a security assessment of the React Native project:\n\n* The React Native Upgrade Checklist (Document React_Native_Upgrade_Checklist.pdf) provides a comprehensive guide for upgrading the React Native version, including steps for checking dependencies, updating native modules, and rebinding third-party libraries. However, it does not explicitly address security concerns, such as access controls, authentication, or sensitive data handling.\n* The checklist does mention running `npm outdated` to check dependencies, which could help identify potential vulnerabilities. However, it does not provide guidance on how to address these vulnerabilities or ensure that dependencies are properly patched.\n* The document does not discuss access controls, authentication mechanisms, or sensitive data handling, which are critical security concerns.\n* The Ganesh-Nalla-Resume.pdf document is a resume and does not provide any relevant information about the security posture of the React Native project.\n\n**Consolidated Risk Score: MEDIUM**\n\nJustification:\n\n* The React Native Upgrade Checklist provides a comprehensive guide for upgrading the React Native version, which is a positive step towards maintaining the security and integrity of the project.\n* However, the checklist lacks explicit guidance on security concerns, such as access controls, authentication, and sensitive data handling, which introduces some security risks.\n* The project's dependencies and libraries may be vulnerable to security risks if not properly updated and patched, which could lead to security incidents.\n* Overall, the security posture of the project is not completely inadequate, but it does require additional attention to security concerns to mitigate potential risks.\n\nRecommendations:\n\n* Conduct a thorough security audit of the project's dependencies and libraries to identify potential vulnerabilities and ensure they are properly updated and patched.\n* Implement access controls, authentication mechanisms, and sensitive data handling procedures to protect the project's code, data, and infrastructure.\n* Develop and regularly test incident response and disaster recovery plans to respond to security incidents or downtime.\n* Provide security awareness training to developers and stakeholders to ensure they understand the importance of security and follow best practices.",
    };
    this.auditor_analysis = converter.makeHtml(response.auditor_analysis);
    this.explanation = converter.makeHtml(response.explanation);
    this.risk_score = response.risk_score;
    this.isModalOpen = true;
  } */
  async analyzeSecurity() {
    this.auditor_analysis = "";
    this.explanation = "";
    this.risk_score = "";
    const loading = await this.loadingCtrl.create({
      message: "Please wait while we analyze the security of the document...",
      duration: 2000,
    });
    loading.present();
    setTimeout(() => {
      this.auditor_analysis =
        "Cognizant has faced several security breaches, including a ransomware attack in 2020 that affected its operations.";
      this.explanation =
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
              (f) => f.name !== doc.name
            );
          },
        },
        "No",
      ],
    });
    await alert.present();
  }

  async uploadFiles() {
    const loading = await this.loadingCtrl.create({
      message: "Please wait while we analyze the security of the document...",
      duration: 2000,
    });

    loading.present();
    const formData = new FormData();
    this.selectedFile.forEach((file, index) => {
      formData.append(`files`, file);
    });

    this.http
      .post(
        "http://ec2-35-86-107-107.us-west-2.compute.amazonaws.com:8000/analyze_documents",
        formData
      )
      .subscribe(
        async (response: any) => {
          loading.dismiss();
          var converter = new showdown.Converter();
          this.auditor_analysis = converter.makeHtml(response.auditor_analysis);
          this.explanation = converter.makeHtml(response.explanation);
          this.risk_score = response.risk_score;
          this.isModalOpen = true;
          loading.dismiss();
        },
        async (error) => {
          const alert = await this.alertController.create({
            header: "Error",
            message: "Error occurred while analyzing documents",
            buttons: ["OK"],
          });
          await alert.present();
          loading.dismiss();
        }
      );
  }
}

/* uploadFiles(files: FileList) {
  const formData = new FormData();
  Array.from(files).forEach((file, index) => {
    formData.append(`files[${index}]`, file);
  });

  this.http.post('api/upload', formData).subscribe(
    response => console.log('Upload successful'),
    error => console.error('Upload failed:', error)
  );
}

// template
<input type="file" multiple (change)="uploadFiles($event.target.files)">
dop-jntc-rpb */
