import { Component, OnInit } from "@angular/core";
import { ChartData, ChartOptions } from 'chart.js';


@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrl: "./bar-chart.component.css",
})
export class BarChartComponent implements OnInit {
  public barChartData!: ChartData<"bar">;
  public barChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true },
    },
  };

  private dashboardData = {
    dashboard: {
      title: "Cyber Risk Assessment Dashboard",
      vendors: [
        {
          vendor_name: "Vendor A",
          visualization: {
            data: [
              { category: "High", value: 4 },
              { category: "Medium", value: 8 },
              { category: "Low", value: 3 },
            ],
          },
        },
        {
          vendor_name: "Vendor B",
          visualization: {
            data: [
              { category: "High", value: 6 },
              { category: "Medium", value: 5 },
              { category: "Low", value: 2 },
            ],
          },
        },
        {
          vendor_name: "Vendor C",
          visualization: {
            data: [
              { category: "High", value: 2 },
              { category: "Medium", value: 6 },
              { category: "Low", value: 9 },
            ],
          },
        },
      ],
    },
  };

  ngOnInit(): void {
    this.prepareChartData();
  }

  private prepareChartData(): void {
    const vendors = this.dashboardData.dashboard.vendors;

    const labels = ["High", "Medium", "Low"];
    const datasets = vendors.map((vendor) => ({
      label: vendor.vendor_name,
      data: labels.map(
        (label) =>
          vendor.visualization.data.find((d) => d.category === label)?.value ||
          0
      ),
      backgroundColor: this.getColor(vendor.vendor_name),
      borderWidth: 1,
    }));

    this.barChartData = { labels, datasets };
  }

  private getColor(vendor: string): string {
    const colors: { [key: string]: string } = {
      "Vendor A": "rgba(255, 99, 132, 0.7)",
      "Vendor B": "rgba(54, 162, 235, 0.7)",
      "Vendor C": "rgba(75, 192, 192, 0.7)",
    };
    return colors[vendor] || "rgba(201, 203, 207, 0.7)";
  }
}
