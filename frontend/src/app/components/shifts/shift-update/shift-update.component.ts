import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShiftService } from '../../../services/shift.service';
import { Shift } from '../../../model/shift.model';

@Component({
  selector: 'app-shift-update',
  templateUrl: './shift-update.component.html',
  styleUrls: ['./shift-update.component.css']
})

export class ShiftUpdateComponent implements OnInit {

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

  updateShift() {
    this.shiftService.updateShift(this.id, this.shift).subscribe({
      next: (data) => {
        console.log(data);
        this.redirectToShiftList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  redirectToShiftList() {
    this.router.navigate(['/shift-list']);
  }

  onSubmit() {
    console.log(this.shift);
    this.updateShift();
  }

}

