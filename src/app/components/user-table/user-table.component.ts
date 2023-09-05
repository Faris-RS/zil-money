import { Component } from '@angular/core';
import { userModel } from 'src/app/models/user.model';
import { Subject, takeUntil } from 'rxjs';
import { GetDetailsService } from 'src/app/services/get-details.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent {
  private ngUnsubscribe = new Subject<void>();

  name: string = '';
  company: string = '';
  designation: string = '';
  userData: userModel[] = [];
  constructor(private service: GetDetailsService) {}

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails(): void {
    this.service
      .fetchDetails()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((response) => {
        if (response) {
          this.userData = response;
          console.log(this.userData);
        } else console.error('error while fetching data');
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
