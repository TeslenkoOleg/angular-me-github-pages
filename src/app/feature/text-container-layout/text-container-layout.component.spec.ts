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

  it('should show all lines and hide the button after skip', () => {
    component.textArray = [
      {text: 'first', prefix: '> '},
      {text: 'second', prefix: '-> ', link: 'https://example.com'},
    ];
    const emitted: number[] = [];
    component.typingEnd.subscribe(i => emitted.push(i));
    fixture.detectChanges();

    const el = fixture.nativeElement as HTMLElement;
    (el.querySelector('.skip-button') as HTMLButtonElement).click();
    fixture.detectChanges();

    expect(emitted).toEqual([0, 1]);
    expect(el.querySelector('.skip-button')).toBeNull();
    expect(el.textContent).toContain('first');
    expect(el.querySelector('a')?.getAttribute('href')).toBe('https://example.com');
  });
});
