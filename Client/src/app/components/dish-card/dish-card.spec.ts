import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

import { DishCardComponent } from './dish-card.component';

describe('CardComponent', () => {
    let component: DishCardComponent;
    let fixture: ComponentFixture<DishCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DishCardComponent],
            imports: [
                MatDialogModule,
                BrowserAnimationsModule
            ],
            providers: [
                {
                    provide: MatDialogRef,
                    useValue: {}
                },
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {}
                }
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DishCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should open dialog', () => {
        spyOn(component.dialog, 'open');
        component.openDialog();
        expect(component.dialog.open).toHaveBeenCalled();
    });
});
