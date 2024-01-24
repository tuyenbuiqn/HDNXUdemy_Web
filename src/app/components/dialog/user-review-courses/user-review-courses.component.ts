import { Component, Input, OnInit, ViewChild, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxStarsComponent } from 'ngx-stars';

@Component({
  selector: 'app-user-review-courses',
  templateUrl: './user-review-courses.component.html',
  styleUrls: ['./user-review-courses.component.scss']
})
export class UserReviewCoursesComponent implements OnInit {
  activeModal = inject(NgbActiveModal);
  @ViewChild(NgxStarsComponent)
  starsComponent: NgxStarsComponent;

  ratingDisplay: number;
  @Input() reviewOfUser: string;
  constructor() { }

  ngOnInit() {
  }

  onRatingSet(rating: number): void {
    this.ratingDisplay = rating;
  }

}
