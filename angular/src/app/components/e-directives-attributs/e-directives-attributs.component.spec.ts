import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DDirectivesAttributsComponent } from './e-directives-attributs.component';

describe('DDirectivesAttributsComponent', () => {
  let component: DDirectivesAttributsComponent;
  let fixture: ComponentFixture<DDirectivesAttributsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DDirectivesAttributsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DDirectivesAttributsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
