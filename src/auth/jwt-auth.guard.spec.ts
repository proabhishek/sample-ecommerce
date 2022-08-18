import { JwtAuthGuard } from './jwt-auth.guard';
// abhishek

describe('JwtAuthGuard', () => {
  it('should be defined', () => {
    expect(new JwtAuthGuard()).toBeDefined();
  });
});
