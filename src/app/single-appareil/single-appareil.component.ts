import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../service/appareil.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {
  name: String = "Appareil";
  status: String = "Status";
  constructor(private appareilService: AppareilService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
