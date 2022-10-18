import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from '../message.service';

import { GreetComponent } from './greet.component';

class MockMessageService extends MessageService { 
  override getMessage() {
    return {message: "Happy New Year"};
  }
}

describe('GreetComponent Test Suite', () => {
  let component: GreetComponent;
  let service: MockMessageService;

  beforeEach(async () => {
    service = new MockMessageService();
    component = new GreetComponent(service);
  });

  it('Data field should be Happy New Year when the service returns Happy New Year', () => {
    component.ngOnInit();
    expect(component.response.message).toBe("Happy New Year");
  });
});
