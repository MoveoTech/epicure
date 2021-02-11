import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of, throwError } from 'rxjs';
import { OrdersService } from 'src/app/services/orders.service';

import { DishDialogComponent } from './dish-dialog.component';

describe('CardComponent', () => {
    let component: DishDialogComponent;
    let fixture: ComponentFixture<DishDialogComponent>;
    let orderService: OrdersService

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DishDialogComponent],
            imports: [MatDialogModule, HttpClientTestingModule],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: {} },
                OrdersService
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DishDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        component.quantity = 1
        orderService = TestBed.inject(OrdersService)
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should increment quantity by 1', () => {
        const quantityStartValue = component.quantity
        component.increment()
        expect(component.quantity).toEqual(quantityStartValue + 1)
    });

    it('should decrement quantity by 1', () => {
        const quantityStartValue = component.quantity
        component.decrement()
        if (component.quantity > 1) {
            expect(component.quantity).toEqual(quantityStartValue);
        }
        else if (component.quantity === 1) {
            expect(component.quantity).toEqual(quantityStartValue);
        }
        else {
            expect(component.quantity).toEqual(quantityStartValue - 1);
        }
    })
    it('should add dish to cart', fakeAsync(() => {
        // expect(service.addOrder({})).toBeInstanceOf(Observable);
        const response = { msg: 'dish added' };
        spyOn(orderService, 'addOrder').and.returnValue(of(response));
        component.addDishToCart();
        fixture.detectChanges();
    }))

    it('should throw error if bad request', () => {
        const mockCall = spyOn(orderService, 'addOrder').and.returnValue(throwError({ status: 404 }));
        component.addDishToCart();
        fixture.detectChanges();
    })

    it('should log side dish', () => {
        expect(component.changeSide())
    })
});
