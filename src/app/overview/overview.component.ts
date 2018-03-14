import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { OverviewService } from './overview.service';
import { IMaterial } from './material';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  materials: IMaterial[];
  material: IMaterial;

  constructor(
    private overView: OverviewService,
    public dialog: MatDialog
   ) { }

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

  getMaterial(id: number): void {
    this.overView.getMaterial(id)
      .subscribe(
        data => this.material = data,
        error => console.log(error)
      );
  }

  openDialog(id: number): void {
    this.getMaterial(id);
    console.log(this.ball);
    const dialogRef = this.dialog.open(DetailComponent, {
      width: '600px',
      height: '400px',
      data: 'Good Job'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

}
