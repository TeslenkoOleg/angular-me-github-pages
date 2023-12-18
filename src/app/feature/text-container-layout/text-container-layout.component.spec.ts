import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextContainerLayoutComponent } from './text-container-layout.component';

describe('TextContainerLayoutComponent', () => {
  let component: TextContainerLayoutComponent;
  let fixture: ComponentFixture<TextContainerLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TextContainerLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextContainerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
