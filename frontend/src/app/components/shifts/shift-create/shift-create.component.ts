import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShiftService } from '../../../services/shift.service';
import { Shift } from '../../../model/shift.model';

@Component({
  selector: 'app-shift-create',
  templateUrl: './shift-create.component.html',
  styleUrls: ['./shift-create.component.css']
})
export class ShiftCreateComponent implements OnInit {

  shift: Shift = new Shift();

  constructor(private shiftService: ShiftService, private router: Router) { }

  ngOnInit(): void {
  }

  saveShift() {
    this.shiftService.createShift(this.shift).subscribe({
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
    this.saveShift();
  }
}
