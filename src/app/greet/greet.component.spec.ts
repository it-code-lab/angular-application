import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from '../message.service';

import { GreetComponent } from './greet.component';

describe('GreetComponent Test Suite', () => {
  let component: GreetComponent;
  let service: MessageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GreetComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
    service = new MessageService();
    component = new GreetComponent(service);
  });

  it('Data field should be Happy New Year when the service returns Happy New Year', () => {
    component.ngOnInit();
    expect(component.response.message).toBe("Happy New Year");
  });
});
