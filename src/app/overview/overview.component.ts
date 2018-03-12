import { Component, OnInit } from '@angular/core';
import { OverviewService } from './overview.service';
import { IMaterial } from './material';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  materials: IMaterial[];

  constructor( private overView: OverviewService ) { }

  ngOnInit() {
    this.getMaterials();
  }

  getMaterials(): void {
    this.overView.getMaterials()
      .subscribe(
        data => this.materials = data,
        error => console.log(error)
      );
  }

}
