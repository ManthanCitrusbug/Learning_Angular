import { IsAuthorizedPipe } from './is-authorized.pipe';

describe('IsAuthorizedPipe', () => {
  it('create an instance', () => {
    const pipe = new IsAuthorizedPipe();
    expect(pipe).toBeTruthy();
  });
});
