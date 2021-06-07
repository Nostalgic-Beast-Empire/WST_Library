import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbookauthorComponent } from './listbookauthor.component';

describe('ListbookauthorComponent', () => {
  let component: ListbookauthorComponent;
  let fixture: ComponentFixture<ListbookauthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListbookauthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbookauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
