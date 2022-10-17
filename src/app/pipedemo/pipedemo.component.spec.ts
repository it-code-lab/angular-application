import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PipedemoComponent } from './pipedemo.component';


xdescribe('PipedemoComponent', () => {
  let component: PipedemoComponent;
  let fixture: ComponentFixture<PipedemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipedemoComponent ],
      imports: [RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
