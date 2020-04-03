import { PiPipe } from './pi.pipe';

describe('PiPipe', () => {
  it('create an instance', () => {
    const pipe = new PiPipe();
    expect(pipe).toBeTruthy();
  });
});
