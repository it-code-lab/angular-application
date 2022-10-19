import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MessageService } from '../message.service';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { GreetComponent } from './greet.component';

describe('GreetComponent Test Suite', () => {
  let component: GreetComponent;
  let fixture: ComponentFixture<GreetComponent>;
  let service: MessageService;
  let spy: any;
  let el: DebugElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [GreetComponent],
      providers: [MessageService]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(GreetComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    // UserService provided to the TestBed
    service = TestBed.inject(MessageService);

    //  get the "a" element by CSS selector (e.g., by class name)
    el = fixture.debugElement.query(By.css('#msgHead'));
  });

  it('Data field should be Happy New Year when the service returns Happy New Year', () => {
    let mockResp = { message: "Happy New Year" };
    spy = spyOn(service, 'getMessage').and.returnValue(mockResp);
    component.ngOnInit();
    expect(component.response.message).toBe("Happy New Year");
  });

  it('HTML template should display happy New Year when the service returns Happy New Year', () => {
    let mockResp = { message: "Happy New Year" };
    spy = spyOn(service, 'getMessage').and.returnValue(mockResp);
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe("Happy New Year");
  });

  it('HTML template should display Happy Halloween when the service returns Happy Halloween', () => {
    let mockResp = { message: "Happy Halloween" };
    spy = spyOn(service, 'getMessage').and.returnValue(mockResp);
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe("Happy Halloween");

  });
});
