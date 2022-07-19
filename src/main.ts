interface DataField {
    id: number;
    text: string;
}

type Lang = string;

type Data1 = Record<Lang, DataField>;
type Data23 = Record<Lang, DataField | null | undefined>;
type Data4 = Record<Lang, DataField | null>;

interface ResultItem {
    lang: string;
    id: number;
    text: string;
}

// ---------

const data1: Data1 = {
    uk: { id: 1, text: 'Привіт!' },
    en: { id: 2, text: 'Hello!' },
    fr: { id: 3, text: 'Salut!' }
};

const expectedResult1: ResultItem[] = [
    { lang: 'en', id: 2, text: 'Hello!' },
    { lang: 'uk', id: 1, text: 'Привіт!' },
    { lang: 'fr', id: 3, text: 'Salut!' }
];

const data2: Data23 = {
    uk: { id: 1, text: 'Привіт!' },
    en: null,
    fr: undefined
};

const expectedResult2: ResultItem[] = [
    { lang: 'uk', id: 1, text: 'Привіт!' }
];

const data3: Data23 = {
    uk: { id: 1, text: 'Привіт!' },
    ru: { id: 4, text: 'Привет!' },
    en: { id: 2, text: 'Hello!' },
    jp: { id: 5, text: 'こんにちは!' },
    fr: { id: 3, text: 'Salut!' }
};

const expectedResult3: ResultItem[] = [
    { lang: 'en', id: 2, text: 'Hello!' },
    { lang: 'uk', id: 1, text: 'Привіт!' },
    { lang: 'fr', id: 3, text: 'Salut!' }
];

const data4: ResultItem[] = [
    { lang: 'en', id: 2, text: 'Hello!' }
];

const expectedResult4: Data4 = {
    uk: { id: 1, text: 'Привіт!' },
    en: null,
    fr: null
};

console.log('Expected1:');
console.log(expectedResult1);
console.log('Expected2:');
console.log(expectedResult2);
console.log('Expected3:');
console.log(expectedResult3);
console.log('Expected14:');
console.log(expectedResult4);

const lang = ['en', 'uk', 'fr']

export const compute1 = (data: Data1): ResultItem[] => {
    const result1: ResultItem[] = []

    lang.forEach((l) => {
        result1.push({
            lang: l, 
            id: data[l]!.id, 
            text: data[l]!.text 
        })
    })

    return result1
}

export const compute23 = (data: Data23): ResultItem[] => {
    const result23: ResultItem[] = []

    lang.forEach((l) => {
        if (data[l]) {
            result23.push({
                lang: l, 
                id: data[l]!.id, 
                text: data[l]!.text 
            })
        }
    })
    return result23
}

export const compute4 = (data: ResultItem[]): Data4 => {
    const existLang = data.map((el) => el.lang)
   
    const result4 = lang.reduce<Data4>((acc, item) => {
        const idx = data.findIndex(el => el.lang === item)
        if (existLang.includes(item)) {
            acc[item] = { id: data[idx].id, text: data[idx].text }
        }
        else {
            acc[item] = null
        }
        return acc
    }, {}) 

    return result4
}

console.log('Result1:');
console.log(compute1(data1));
console.log('Result2:');
console.log(compute23(data2));
console.log('Result3:');
console.log(compute23(data3));
console.log('Result4:');
console.log(compute4(data4));