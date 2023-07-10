import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroviewComponent } from './heroview.component';

describe('HeroviewComponent', () => {
  let component: HeroviewComponent;
  let fixture: ComponentFixture<HeroviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
