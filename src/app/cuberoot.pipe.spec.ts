import { CuberootPipe } from './cuberoot.pipe';

describe('CuberootPipe Test Suite', () => {

  let pipe: CuberootPipe;

  beforeEach(() => {
    pipe = new CuberootPipe();
  });

  it ('Return correct cuberoot of a number', ()=> {
    expect(pipe.transform(27)).toBe(3);
  })
});
