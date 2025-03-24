import { PasswordChecker, PasswordErrors } from "../../app/pass_checker/PasswordChecker";


describe('PasswordChecker test suite', () => {

    let sut: PasswordChecker;

    beforeEach(()=>{
        sut = new PasswordChecker();
    });

    it('should check password < 8  chars is invalid', ()=>{
       const actual = sut.checkPassword('1234567');
       expect(actual.valid).toBe(false);
       expect(actual.reasons).toContain(PasswordErrors.SHORT);

    })

    it('should check password > 8  chars is valid', ()=>{
        const actual = sut.checkPassword('12345678Aa');
        expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
     });

     it('should check password with no uppercase letter is invalid', ()=>{
        const actual = sut.checkPassword('ABCD');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
     });

     it('should check password with uppercase letter is valid', ()=>{
        const actual = sut.checkPassword('abcDA');
        expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE);
     })

     it('should check password with no lowercase letter is invalid', ()=>{
        const actual = sut.checkPassword('abcd');
        expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE);
     });

     it('should check password with lowercase letter is valid', ()=>{
        const actual = sut.checkPassword('ABCDa');
        expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE);
     })

     it('Complex password is valid', ()=>{
      const actual = sut.checkPassword('ABCDa123');
      expect(actual.reasons).toHaveLength(0);
      expect(actual.valid).toBe(true);
     })

     it('Admin password with no number is invalid', ()=>{
      const actual = sut.checkAdminPassword('abcdABCD');
      expect(actual.reasons).toContain(PasswordErrors.NO_NUMBER);
      expect(actual.valid).toBe(false);
     });

     it('Admin password with no number is invalid', ()=>{
      const actual = sut.checkAdminPassword('abcdABCD7');
      expect(actual.reasons).not.toContain(PasswordErrors.NO_NUMBER);
     });
})