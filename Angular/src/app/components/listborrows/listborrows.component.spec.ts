import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListborrowsComponent } from './listborrows.component';

describe('ListborrowsComponent', () => {
  let component: ListborrowsComponent;
  let fixture: ComponentFixture<ListborrowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListborrowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListborrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
