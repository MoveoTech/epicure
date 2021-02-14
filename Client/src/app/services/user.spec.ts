import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';


describe('User Service', () => {
    let service: UserService;
    let http: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UserService],
        });
        service = TestBed.inject(UserService);
        http = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should register and return user data', () => {
        const userInfo = {
            _id: '601fa660f6586c10f8f933ae',
            username: 'test',
            password: '423432'
        };
        let userResponse;

        service.userRegister(userInfo).subscribe(
            res => userResponse = res
        );

        http.expectOne(`${environment.BASE_URL}/user/register`).flush(userInfo);
        expect(userResponse).toEqual(userResponse);
    });

    it('should return observable on user login', () => {
        expect(service.userLogin({})).toBeInstanceOf(Observable);
    });

    it('should return observable on admin login', () => {
        expect(service.adminLogin({})).toBeInstanceOf(Observable);
    });
    it('should return observable on verify login', () => {
        expect(service.verifyLogged()).toBeInstanceOf(Observable);
    });

});
