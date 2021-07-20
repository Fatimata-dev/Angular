import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DDirectivesStructurelleComponent } from './d-directives-structurelle.component';

describe('DDirectivesStructurelleComponent', () => {
  let component: DDirectivesStructurelleComponent;
  let fixture: ComponentFixture<DDirectivesStructurelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DDirectivesStructurelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DDirectivesStructurelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
