

export class StringUtils{

    public toUpperCase(str: string): string {

        if(!str) throw new Error('Invalid string');

        return str.toUpperCase();
    }

}
export function toUpperCase(str: string): string {
    return str.toUpperCase();
}


export type stringInfo = {
    lowerCase: string,
    upperCase: string
    characters: string [],
    length: number
    extraInfo: Object |  undefined
}


export function getStringInfo(str: string): stringInfo {
    return {
        lowerCase: str.toLowerCase(),
        upperCase: str.toUpperCase(),
        characters: Array.from(str),
        length: str.length,
        extraInfo: {}
    }
}