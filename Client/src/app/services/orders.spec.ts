import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs';
import { OrdersService } from './orders.service';
import { environment } from 'src/environments/environment';


describe('Order Service ', () => {
    let service: OrdersService;
    let http: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [OrdersService],
        });
        service = TestBed.inject(OrdersService);
        http = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get orders list ', () => {
        const orderInfo = [{
            user: '123452235',
            payed: false,
            dish: '4324809tsd',
            quantity: 3
        }];
        let orderResponse;

        service.getUserOrders().subscribe(
            res => orderResponse = res
        );

        http.expectOne(`${environment.BASE_URL}/orders`).flush(orderInfo);
        expect(orderResponse).toEqual(orderInfo);
    });
    it('should return observable on post', () => {
        expect(service.addOrder({})).toBeInstanceOf(Observable);
    });
    it('should return observable on delete', () => {
        expect(service.removeOrderItem(3)).toBeInstanceOf(Observable);
    });
});
