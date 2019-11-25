import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideSnippetsComponent } from './side-snippets.component';

describe('SideSnippetsComponent', () => {
  let component: SideSnippetsComponent;
  let fixture: ComponentFixture<SideSnippetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideSnippetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideSnippetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
