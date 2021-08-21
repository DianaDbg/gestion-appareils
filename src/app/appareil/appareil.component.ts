import { Component, OnInit, Input } from "@angular/core";
import { getCurrencySymbol } from "@angular/common";
import { AppareilService } from "../service/appareil.service";

@Component({
  selector: "app-appareil",
  templateUrl: "./appareil.component.html",
  styleUrls: ["./appareil.component.scss"]
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: String;
  @Input() appareilStatus: String;
  @Input() indexOfAppareil: number;

  constructor(private appareilService: AppareilService) {}

  ngOnInit() {}

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === "allumé") {
      return "green";
    } else if (this.appareilStatus === "éteint") {
      return "red";
    }
  }

  ToutAllumer() {
    this.appareilService.switchOffAll();
  }

  ToutEteindre() {
    this.appareilService.switchOffAll();
  }

  switchOn() {
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  switchOff() {
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
}
