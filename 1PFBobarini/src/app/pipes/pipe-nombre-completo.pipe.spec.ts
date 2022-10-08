import { PipeNombreCompletoPipe } from './pipe-nombre-completo.pipe';

describe('PipeNombreCompletoPipe', () => {
  it('create an instance', () => {
    const pipe = new PipeNombreCompletoPipe();
    expect(pipe).toBeTruthy();
  });
});
