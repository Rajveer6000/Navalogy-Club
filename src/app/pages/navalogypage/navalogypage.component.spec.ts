import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavalogypageComponent } from './navalogypage.component';

describe('NavalogypageComponent', () => {
  let component: NavalogypageComponent;
  let fixture: ComponentFixture<NavalogypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavalogypageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavalogypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
