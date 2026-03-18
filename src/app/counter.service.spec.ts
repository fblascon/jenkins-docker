import { CounterService } from './counter.service';

describe('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    service = new CounterService();
  });

  it('should start at 0', () => {
    expect(service.getCount()).toBe(0);
  });

  it('should increment', () => {
    service.increment();
    expect(service.getCount()).toBe(1);
  });

  it('should decrement', () => {
    service.increment();
    service.decrement();
    expect(service.getCount()).toBe(0);
  });

  it('should reset', () => {
    service.increment();
    service.reset();
    expect(service.getCount()).toBe(0);
  });
});
