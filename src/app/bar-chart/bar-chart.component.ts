import { Component, OnInit, AfterViewInit } from "@angular/core";
/* import { Chart, ChartData, ChartOptions } from "chart.js"; */
import { Chart } from 'chart.js/auto';

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrl: "./bar-chart.component.css",
})
export class BarChartComponent implements AfterViewInit {
  jsonData = {
    dashboard: {
      vendors: [
        {
          vendor_name: "Vendor A",
          categories: {
            "Network Security": {
              risk_score: 75,
              high_risk: 3,
              medium_risk: 1,
              low_risk: 0,
              details: [
                {
                  vulnerability: "Unpatched Firewall",
                  risk_level: "High",
                  recommendation: "Apply patch immediately",
                },
                {
                  vulnerability: "Misconfigured Router",
                  risk_level: "Medium",
                  recommendation: "Reconfigure router settings",
                },
              ],
            },
            "Endpoint Security": {
              risk_score: 50,
              high_risk: 1,
              medium_risk: 2,
              low_risk: 1,
              details: [
                {
                  vulnerability: "Outdated Antivirus",
                  risk_level: "High",
                  recommendation: "Upgrade antivirus software",
                },
                {
                  vulnerability: "Lack of EDR Solution",
                  risk_level: "Medium",
                  recommendation: "Implement EDR solution",
                },
                {
                  vulnerability: "Weak Encryption on USB Drives",
                  risk_level: "Low",
                  recommendation: "Enforce encryption policy",
                },
              ],
            },
            "Identity and Authentication": {
              risk_score: 30,
              high_risk: 0,
              medium_risk: 2,
              low_risk: 1,
              details: [
                {
                  vulnerability: "Weak Password Policy",
                  risk_level: "Medium",
                  recommendation: "Enforce stronger password policy",
                },
                {
                  vulnerability: "No Multi-factor Authentication",
                  risk_level: "Medium",
                  recommendation: "Enable MFA for all users",
                },
                {
                  vulnerability: "Password Reuse",
                  risk_level: "Low",
                  recommendation:
                    "Educate employees on password best practices",
                },
              ],
            },
            "Penetration Testing": {
              risk_score: 60,
              high_risk: 1,
              medium_risk: 2,
              low_risk: 1,
              details: [
                {
                  vulnerability: "SQL Injection",
                  risk_level: "High",
                  recommendation: "Fix input sanitization",
                },
                {
                  vulnerability: "Cross-site Scripting (XSS)",
                  risk_level: "Medium",
                  recommendation: "Sanitize all user inputs",
                },
                {
                  vulnerability: "Exposed Internal Systems",
                  risk_level: "Low",
                  recommendation: "Restrict internal system access",
                },
              ],
            },
            "Vulnerability Management": {
              risk_score: 40,
              high_risk: 2,
              medium_risk: 1,
              low_risk: 1,
              details: [
                {
                  vulnerability: "Unpatched Vulnerabilities",
                  risk_level: "High",
                  recommendation: "Implement automated patch management",
                },
                {
                  vulnerability: "Missing Vulnerability Scans",
                  risk_level: "Medium",
                  recommendation: "Conduct regular vulnerability scans",
                },
                {
                  vulnerability: "Outdated Risk Assessments",
                  risk_level: "Low",
                  recommendation: "Update risk assessments periodically",
                },
              ],
            },
          },
          overall_risk_score: {
            total_score: 60,
            risk_level: "Medium",
            high: 7,
            medium: 6,
            low: 3,
          },
        },
        {
          vendor_name: "Vendor B",
          categories: {
            "Network Security": {
              risk_score: 90,
              high_risk: 4,
              medium_risk: 0,
              low_risk: 0,
              details: [
                {
                  vulnerability: "Outdated Firewall Rules",
                  risk_level: "High",
                  recommendation: "Review and update firewall rules",
                },
                {
                  vulnerability: "Open Ports Exposed to the Internet",
                  risk_level: "High",
                  recommendation: "Close unnecessary open ports",
                },
                {
                  vulnerability: "No Intrusion Detection System (IDS)",
                  risk_level: "High",
                  recommendation: "Implement IDS/IPS solutions",
                },
                {
                  vulnerability: "Weak VPN Encryption",
                  risk_level: "Medium",
                  recommendation: "Upgrade VPN encryption protocols",
                },
              ],
            },
            "Endpoint Security": {
              risk_score: 40,
              high_risk: 0,
              medium_risk: 2,
              low_risk: 2,
              details: [
                {
                  vulnerability: "Outdated Antivirus",
                  risk_level: "Medium",
                  recommendation: "Update antivirus software",
                },
                {
                  vulnerability: "Unpatched Operating Systems",
                  risk_level: "Medium",
                  recommendation: "Apply OS patches",
                },
                {
                  vulnerability: "Secure Configuration Not Enforced",
                  risk_level: "Low",
                  recommendation: "Enforce secure configuration policies",
                },
                {
                  vulnerability: "No Endpoint Detection and Response",
                  risk_level: "Low",
                  recommendation: "Deploy EDR solution",
                },
              ],
            },
            "Identity and Authentication": {
              risk_score: 50,
              high_risk: 0,
              medium_risk: 1,
              low_risk: 3,
              details: [
                {
                  vulnerability: "No Multi-factor Authentication (MFA)",
                  risk_level: "Medium",
                  recommendation: "Enable MFA across all accounts",
                },
                {
                  vulnerability: "Weak Password Policy",
                  risk_level: "Low",
                  recommendation: "Enforce a stronger password policy",
                },
                {
                  vulnerability: "No Role-based Access Control (RBAC)",
                  risk_level: "Low",
                  recommendation: "Implement RBAC for better access control",
                },
                {
                  vulnerability: "Lack of Account Lockout Mechanism",
                  risk_level: "Low",
                  recommendation:
                    "Implement account lockout after multiple failed login attempts",
                },
              ],
            },
            "Penetration Testing": {
              risk_score: 55,
              high_risk: 1,
              medium_risk: 2,
              low_risk: 1,
              details: [
                {
                  vulnerability: "Cross-Site Request Forgery (CSRF)",
                  risk_level: "High",
                  recommendation: "Fix CSRF vulnerabilities",
                },
                {
                  vulnerability:
                    "Information Disclosure through Error Messages",
                  risk_level: "Medium",
                  recommendation:
                    "Ensure error messages do not disclose sensitive information",
                },
                {
                  vulnerability: "Outdated Dependencies",
                  risk_level: "Medium",
                  recommendation: "Update software dependencies",
                },
                {
                  vulnerability: "Open Redirects",
                  risk_level: "Low",
                  recommendation: "Validate all redirects properly",
                },
              ],
            },
            "Vulnerability Management": {
              risk_score: 65,
              high_risk: 3,
              medium_risk: 1,
              low_risk: 1,
              details: [
                {
                  vulnerability: "Missing Patch Management",
                  risk_level: "High",
                  recommendation: "Implement automated patch management",
                },
                {
                  vulnerability: "Unreviewed Vulnerability Scans",
                  risk_level: "High",
                  recommendation:
                    "Review and act on vulnerability scan results",
                },
                {
                  vulnerability: "Outdated Risk Analysis",
                  risk_level: "Medium",
                  recommendation: "Conduct regular risk assessments",
                },
                {
                  vulnerability: "Unpatched Vulnerabilities in Software",
                  risk_level: "Low",
                  recommendation: "Patch vulnerabilities in software regularly",
                },
              ],
            },
          },
          overall_risk_score: {
            total_score: 70,
            risk_level: "Medium",
            high: 8,
            medium: 4,
            low: 5,
          },
        },
      ],
      dashboard_summary: {
        total_vendors: 2,
        high_risk_vendors: 2,
        medium_risk_vendors: 0,
        low_risk_vendors: 0,
      },
    },
  };

  ngAfterViewInit() {
    setTimeout(() => {
      this.createCategoriesChart();
      this.createOverAllriskChart();
    }, 500);
  }

  createOverAllriskChart() {
    const vendors = this.jsonData.dashboard.vendors;
    const vendorNames = vendors.map(v => v.vendor_name);
    const riskScores = vendors.map(v => v.overall_risk_score.total_score);

    new Chart("overAllriskChart", {
      type: 'bar',
      data: {
        labels: vendorNames,
        datasets: [{
          label: 'Overall Risk Score',
          data: riskScores,
          backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
          borderColor: 'black',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }

  createCategoriesChart() {
    const vendors = this.jsonData.dashboard.vendors;
    const categories = Object.keys(vendors[0].categories);
    const vendorNames = vendors.map((v) => v.vendor_name);

    const datasets = vendors.map((vendor) => {
      return {
        label: vendor.vendor_name,
        data: categories.map((cat) => vendor.categories[cat].risk_score),
        backgroundColor: this.getRandomColor(),
        borderColor: "black",
        borderWidth: 1,
      };
    });

    new Chart("riskChart", {
      type: "bar",
      data: {
        labels: categories,
        datasets: datasets,
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true },
        },
      },
    });
  }

  getRandomColor() {
    return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, 0.6)`;
  }
}
