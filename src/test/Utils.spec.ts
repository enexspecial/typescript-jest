import { getStringInfo, StringUtils, toUpperCase } from "../app/Utils";

describe('Utils test suite', () => {

    describe.only('StringUtils tests', ()=>{
        let sut: StringUtils;

        beforeEach(()=>{
            sut = new StringUtils();
            console.log('set up')
        });

        it('should return correct  uppercase', () => {
            const actual = sut.toUpperCase('hello');
            expect(actual).toBe('HELLO');
        });

        it('should throw error on invalid string', () => {
            function expectError() {
                 sut.toUpperCase('');
            }
     
            expect(expectError).toThrow('Invalid string');
        });

        it('should throw error on invalid string-- arrow function', () => {     
            expect(()=>{
                sut.toUpperCase('');
            }).toThrow('Invalid string');
        });

        it('should throw error on invalid string-- try catch block', (done) => {
            try{
                sut.toUpperCase('');
                done('GetStringInfo should throw error on invalid string');
            }catch(error){
                expect(error).toBeInstanceOf(Error);
                expect(error).toHaveProperty('message', 'Invalid string');
                done();
            }
            
        })

    });

    it('should return uppercase of a valid string', () => {
        // arrange
        const sut  = toUpperCase;
        const expected = 'HELLO';
        // act
        const actual = sut('hello');
        // assert
        expect(actual).toBe(expected);

    });



    it.only('should return info for a valid string', () => {
        const actual = getStringInfo('My-String');

        expect(actual.lowerCase).toBe('my-string');
        expect(actual.extraInfo).toEqual({});
        expect(actual.characters.length).toBe(9);
        expect(actual.characters).toHaveLength(9);
        expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g']);
        expect(actual.characters).toContain('M');
        expect(actual.extraInfo).not.toBeNull();
    });
  
    
})