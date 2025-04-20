// Converts a string to a URL-friendly slug by replacing spaces and underscores with hyphens and removing non-alphanumeric characters except hyphens.
export const toSlug = (str: string): string => {
    return str
        .toLowerCase()
        .trim()
        .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
        .replace(/[^\w-]+/g, ''); // Remove non-alphanumeric characters except hyphens
};

// Capitalizes the first character of the string after trimming any leading or trailing spaces.
export const capitalizeFirstWord = (str: string): string => {
    return str
        .trim()
        .replace(/^\w/, (c) => c.toUpperCase()); // Capitalize the first character
};

// Capitalizes the first character of each word in the string after trimming spaces.
export const capitalizeWords = (str: string): string => {
    return str
        .trim()
        .replace(/\b\w/g, (c) => c.toUpperCase()); // Capitalize the first character of each word
};

// Converts a string to camelCase by removing spaces and capitalizing the first letter of each word except the first word.
export const camelCase = (str: string): string => {
    return str
        .toLowerCase()
        .trim()
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
            index === 0 ? match.toLowerCase() : match.toUpperCase()
        )
        .replace(/\s+/g, ''); // Remove spaces
};

// Counts the number of words in a string by splitting it on spaces and filtering out empty entries.
export const countWords = (str: string): number => {
    return str
        .trim()
        .split(/\s+/).filter(Boolean).length; // Split by spaces and count non-empty words
};

// Removes all numeric characters from the string.
export const removeNumbers = (str: string): string => {
    return str.replace(/\d+/g, ''); // Remove all digits
};

// Removes all non-letter characters from the string, except spaces.
export const onlyLetters = (str: string): string => {
    return str.replace(/[^a-zA-Z\s]/g, ''); // Remove non-letter characters except spaces
};

// Removes extra spaces from the string, leaving only single spaces between words.
export const removeExtraSpaces = (str: string): string => {
    return str
        .trim()
        .replace(/\s+/g, ' '); // Replace multiple spaces with a single space
};

// Converts a string to dot.case by replacing spaces with dots and converting to lowercase.
export const dotCase = (str: string): string => {
    return str
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '.'); // Replace spaces with dots
};

export const removeWords = (str: string, blacklist: string[], caseSensitive: boolean): string => {
    return blacklist.reduce((acc, word) => {
        const regex = new RegExp(`\\b${word}\\b`, `g${caseSensitive ? '' : 'i' }`); 
        return acc.replace(regex, '').trim()             
    }, str).replace(/\s+/g, ' ');// Ensure no extra spaces remain
};
