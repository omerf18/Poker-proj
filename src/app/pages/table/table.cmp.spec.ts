import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCmp} from './table.cmp';

describe('RecipesComponent', () => {
  let component: TableCmp;
  let fixture: ComponentFixture<TableCmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCmp ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
