import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShiftService } from '../../../services/shift.service';
import { Shift } from '../../../model/shift.model';

@Component({
  selector: 'app-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.css']
})
export class ShiftListComponent implements OnInit {

  shifts: Shift[] | undefined;

  constructor(private shiftService: ShiftService, private router: Router) {

  }

  ngOnInit(): void {
    this.getShifts();
  }

  private getShifts() {
    this.shiftService.getShiftList().subscribe(data => {
      this.shifts = data;
    });
  }

  updateShift(id: number) {
    this.router.navigate(['shift-update', id]);
  }

  detailShift(id: number) {
    this.router.navigate(['shift-detail', id]);
  }

  createShift() {
    this.router.navigate(['shift-create']);
  }

  deleteShift(id: number) {
    this.router.navigate(['shift-delete', id]);
  }

}
