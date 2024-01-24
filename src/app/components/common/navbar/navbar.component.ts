import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CartServices } from 'src/app/core/services/cart.service';
import { CategoryServices } from 'src/app/core/services/category.service';
import { CategoryModel } from 'src/app/models/models/category';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    // Navbar Sticky
    isSticky: boolean = false;
    categories: CategoryModel[] = [];
    public count: number = 0;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }
    constructor(
        private readonly categoryServices: CategoryServices,
        private readonly router: Router,
        private readonly cartServices : CartServices,) { }

    ngOnInit(): void {
        this.loadDataCategory();
        this.cartServices.cartUpdates$.subscribe(() => {
            this.count = this.cartServices.count;
        })
    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    /**
 * Set user option link inner HTML
 * @param obj 
 * @returns {string}
 */
    userOptionLinkHTML(obj: any): string {
        return obj.icon + '<span class="ms-2">' + obj.name + '</span>';
    }


    /**
 * User logout
 */
    logout() {
        // this.loginService.userLogout();
    }

    loadDataCategory() {
        this.categoryServices.getCategories().subscribe((res) => {
            if (res.retCode === 0 && res.systemMessage === '') {
                this.categories = res.data;
            }
        })
    }

    goToViewDetailCourseOfCategory(id: number) {
        this.router.navigate([`/khoa-hoc/${id}`]);
    }

}