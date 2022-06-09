import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuocontainerComponent } from './duocontainer.component';

describe('DuocontainerComponent', () => {
  let component: DuocontainerComponent;
  let fixture: ComponentFixture<DuocontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuocontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuocontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
