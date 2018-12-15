import { helloReactLib } from './index';

describe('helloReactLib', () => {
  it('should be a function', () => {
    expect(helloReactLib).toBeInstanceOf(Function);
  });

  it('should print hello', () => {
    global.console.log = jest.fn();
    helloReactLib();
    expect(global.console.log).toBeCalledWith('Hello React Lib');
  });
});
