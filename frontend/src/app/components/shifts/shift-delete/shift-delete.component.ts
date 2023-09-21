import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShiftService } from '../../../services/shift.service';
import { Shift } from '../../../model/shift.model';

@Component({
  selector: 'app-shift-delete',
  templateUrl: './shift-delete.component.html',
  styleUrls: ['./shift-delete.component.css']
})
export class ShiftDeleteComponent implements OnInit {
  id!: number;
  shift: Shift = new Shift();

  constructor(private shiftService: ShiftService,
    private route: ActivatedRoute, private router: Router) { }

  private getShiftById() {
    this.id = this.route.snapshot.params['id'];
    this.shiftService.getShiftById(this.id).subscribe({
      next: (data) => {
        this.shift = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
    this.getShiftById();
  }

  deleteShift() {
    this.shiftService.deleteShift(this.id).subscribe(data => {
      console.log(data);
      this.redirectToShiftList();
    });
  }
  redirectToShiftList() {
    this.router.navigate(['/shift-list']);
  }
  onSubmit() {
    console.log(this.shift);
    this.deleteShift();
  }

}
