import { async, TestBed } from '@angular/core/testing';
import { ReviewsService } from './reviews.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs';


describe('Review Service', () => {
    let service: ReviewsService;
    let http: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ReviewsService],
        });
        service = TestBed.inject(ReviewsService);
        http = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('should get reviews data', () => {
        const reviewInfo = {
            _id: '601fa660f6586c10f8f933ae',
            user: { $oid: '601a6ae0474ba6199bebe57c' },
            restaurant: { $oid: '6007fece1ed4438eb6834706' },
            body: 'dsadasdsadas',
            rating: 3,
        };
        let reviewResponse;

        service.getReviews('claro').subscribe(
            res => reviewResponse = res
        );

        http.expectOne('http://localhost:1000/reviews?restaurant=claro').flush(reviewInfo);
        expect(reviewResponse).toEqual(reviewInfo);
    });

    it('should return observable on post', () => {
        expect(service.addReview({})).toBeInstanceOf(Observable);
    });

});
