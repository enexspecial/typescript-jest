import { PasswordChecker } from "../../app/pass_checker/PasswordChecker";


describe('PasswordChecker test suite', () => {

    let sut: PasswordChecker;

    beforeEach(()=>{
        sut = new PasswordChecker();
    });

    it('should check password < 8  chars is invalid', ()=>{
       const actual = sut.checkPassword('1234567');
       expect(actual).toBe(false);

    })

    it('should check password > 8  chars is valid', ()=>{
        const actual = sut.checkPassword('12345678Aa');
        expect(actual).toBe(true);
     });

     it('should check password with no uppercase letter is invalid', ()=>{
        const actual = sut.checkPassword('1234abcd');
        expect(actual).toBe(false);
     });

     it('should check password with uppercase letter is valid', ()=>{
        const actual = sut.checkPassword('1234abcdA');
        expect(actual).toBe(true);
     })

     it('should check password with no lowercase letter is invalid', ()=>{
        const actual = sut.checkPassword('1234ABCD');
        expect(actual).toBe(false);
     });

     it('should check password with lowercase letter is valid', ()=>{
        const actual = sut.checkPassword('1234ABCDa');
        expect(actual).toBe(true);
     })
})