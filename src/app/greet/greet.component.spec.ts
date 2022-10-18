import { MessageService } from '../message.service';

import { GreetComponent } from './greet.component';

describe('GreetComponent Test Suite', () => {
  let component: GreetComponent;
  let service: MessageService;
  let spy: any;

  beforeEach(async () => {
    service = new MessageService();
    component = new GreetComponent(service);
  });

  it('Data field should be Happy New Year when the service returns Happy New Year', () => {
    let mockResp = { message: "Happy New Year" };
    spy = spyOn(service, 'getMessage').and.returnValue(mockResp);
    component.ngOnInit();
    expect(component.response.message).toBe("Happy New Year");
  });
});
