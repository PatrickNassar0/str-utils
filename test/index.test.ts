import {
    toSlug,
    capitalizeFirstWord,
    capitalizeWords,
    camelCase,
    countWords,
    removeNumbers,
    onlyLetters,
    removeExtraSpaces,
    dotCase,
    removeWords,
} from '../src/index';

describe('String Utility Functions', () => {
    test('toSlug converts a string to a URL-friendly slug', () => {
        expect(toSlug("Hello World!")).toBe("hello-world");
        expect(toSlug("This_is_a_test")).toBe("this-is-a-test");
    });

    test('capitalizeFirstWord capitalizes the first character of the string', () => {
        expect(capitalizeFirstWord(" hello world")).toBe("Hello world");
        expect(capitalizeFirstWord("hello")).toBe("Hello");
    });

    test('capitalizeWords capitalizes the first character of each word', () => {
        expect(capitalizeWords("hello world")).toBe("Hello World");
        expect(capitalizeWords("hello world multiple words here")).toBe("Hello World Multiple Words Here");
    });

    test('camelCase converts a string to camelCase', () => {
        expect(camelCase("hello world")).toBe("helloWorld");
        expect(camelCase("hello world this is a test")).toBe("helloWorldThisIsATest");
    });

    test('countWords counts the number of words in a string', () => {
        expect(countWords("hello world")).toBe(2);
        expect(countWords("  hello   world  ")).toBe(2);
    });

    test('removeNumbers removes all numeric characters from the string', () => {
        expect(removeNumbers("hello123@world456")).toBe("hello@world");
        expect(removeNumbers("no numbers")).toBe("no numbers");
    });

    test('onlyLetters removes all non-letter characters except spaces', () => {
        expect(onlyLetters("hello123!@# world456")).toBe("hello world");
        expect(onlyLetters("hello123 world!")).toBe("hello world");
    });

    test('removeExtraSpaces removes extra spaces from the string', () => {
        expect(removeExtraSpaces("  hello   world  ")).toBe("hello world");
        expect(removeExtraSpaces("hello   world")).toBe("hello world");
    });

    test('dotCase converts a string to dot.case', () => {
        expect(dotCase("Hello World")).toBe("hello.world");
        expect(dotCase("This is a test")).toBe("this.is.a.test");
    });

    test('removeWords removes all strings in the array', () => {
        expect(removeWords("hello my world", ["Hello"], true)).toBe("hello my world");
        expect(removeWords("hello my world today", ["Hello", "my" , "today"], false)).toBe("world");
    })
});
