import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptComponent } from './crypt.component';

describe('CryptComponent', () => {
  let component: CryptComponent;
  let fixture: ComponentFixture<CryptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
