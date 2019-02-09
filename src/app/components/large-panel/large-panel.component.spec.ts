import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargePanelComponent } from './large-panel.component';

describe('LargePanelComponent', () => {
  let component: LargePanelComponent;
  let fixture: ComponentFixture<LargePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
