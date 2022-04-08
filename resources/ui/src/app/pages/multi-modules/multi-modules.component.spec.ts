import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiModulesComponent } from './multi-modules.component';

describe('MultiModulesComponent', () => {
  let component: MultiModulesComponent;
  let fixture: ComponentFixture<MultiModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
