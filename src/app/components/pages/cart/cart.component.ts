import { Component, OnInit } from '@angular/core';
import { CartServices } from 'src/app/core/services/cart.service';
import { GetCourseWithDetailsContent } from 'src/app/models/respone_model/course-content-with-detail';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  totalValue = 0;
  constructor(
    public cartServices: CartServices
  ) { }

  ngOnInit(): void {
    this.totalValue = this.cartServices.courseItems.reduce((c, t1) => t1.totalOrder + c, 0);
  }

  removeItemOnCart(item: GetCourseWithDetailsContent) {
    this.cartServices.removeCourse(item);
    this.totalValue = this.cartServices.courseItems.reduce((c, t1) => t1.totalOrder + c, 0);
  }

}
