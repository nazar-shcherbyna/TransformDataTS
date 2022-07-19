import { compute1, compute23, compute4 } from "../src/main";

describe('tests 1,2,3,4', () => {
    test('compute1: transformation and sorting', () => {
        const testVal = {
            fr: { id: 3, text: 'Salut!' },
            en: { id: 2, text: 'Hello!' },
            uk: { id: 1, text: 'Привіт!' }
        };
        expect(compute1(testVal)).toEqual([
            { lang: 'en', id: 2, text: 'Hello!' },
            { lang: 'uk', id: 1, text: 'Привіт!' },
            { lang: 'fr', id: 3, text: 'Salut!' }
        ])
    })
    test('compute2: checking for null and undefined', () => {
        const testVal = {
            uk: null,
            en: { id: 4, text: 'Hallo!' },
            fr: undefined
        };
        expect(compute23(testVal)).toEqual([
            { lang: 'en', id: 4, text: 'Hallo!' }
        ])
    })
    test('compute3: filter unnecessary lang', () => {
        const testVal = {
            uk: { id: 1, text: 'Привіт!' },
            es: { id: 4, text: 'Hola!' },
            it: { id: 8, text: 'Ciao' },
            en: { id: 2, text: 'Hello!' },
            fr: { id: 3, text: 'Salut!' }
        }; 
        expect(compute23(testVal)).toEqual([
            { lang: 'en', id: 2, text: 'Hello!' },
            { lang: 'uk', id: 1, text: 'Привіт!' },
            { lang: 'fr', id: 3, text: 'Salut!' }
        ])
    })
    test('compute4: reverse transformation', () => { 
        const testVal = [
            {lang: 'uk', id: 1, text: 'Привіт!'}
        ]
        expect(compute4(testVal)).toEqual({
            uk: { id: 1, text: 'Привіт!' },
            en: null,
            fr: null
        })
    })
})