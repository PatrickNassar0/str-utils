# string-playground

String utility functions for clean and consistent text handling in TypeScript and JavaScript.

---

## 🚀 Features

- Convert strings to `slug`, `camelCase`, or `dot.case`
- Capitalize the first word or every word
- Cleane the string form strings that are provided in the blacklist
- Remove numbers, symbols, or extra whitespace
- Count words accurately
- Zero dependencies, easy to use anywhere

---

## 📦 Installation

```bash
npm install string-playground
# or
pnpm install string-playground
# or
yarn add string-playground
```

---

## 🛠️ Usage

### 1. removeWords: (str, blacklist, caseSensitive)
- Cleane the string form strings that are provided in the blacklist.
```bash
import { removeWords } from 'string-playground';
removeWords("hello x my world today 1 !", ["Hello", "my" , "x", "1", "!"], false) // Output: "world today"
```

### toSlug(str)
- Converts text to a URL-friendly slug. Replaces spaces and underscores with hyphens and removes special characters.
```bash
import { toSlug } from 'string-playground';
toSlug("Hello World!")  // Output: "hello-world"
```

### capitalizeFirstWord(str)
- Capitalizes just the first character of the first word.
```bash
import { capitalizeFirstWord } from 'string-playground';
capitalizeFirstWord("  hello world") // Output: "Hello world"
```

### capitalizeWords(str)
- Capitalizes the first letter of each word in the string.
```bash
import { capitalizeWords } from 'string-playground';
capitalizeWords("  hello world from js") // Output: "Hello World From Js"
```

### camelCase(str)
- Converts text to camelCase
```bash
import { camelCase } from 'string-playground';
camelCase("hello world from js") // Output: "helloWorldFromJs"
```

### countWords(str)
- Counts the number of words in a string
```bash
import { countWords } from 'string-playground';
countWords("  Hello    world again ") // Output: 3
```

### removeNumbers(str)
- Removes all numeric characters.
```bash
import { removeNumbers } from 'string-playground';
removeNumbers("abc123def456") // Output: "abcdef"
```

### onlyLetters(str)
- Removes everything except letters and spaces.
```bash
import { onlyLetters } from 'string-playground';
onlyLetters("Hello 123! How's it going?") // Output: "Hello  Hows it going"
```

### removeExtraSpaces(str)
- Cleans up extra spaces and leaves only single spaces.
```bash
import { removeExtraSpaces } from 'string-playground';
removeExtraSpaces("  Too   many     spaces  ") // Output: "Too many spaces"
```

### dotCase(str)
- Converts spaces to dots and lowercases the text.
```bash
import { dotCase } from 'string-playground';
dotCase("Hello World Again") // Output: "hello.world.again"
```

---

## 🧪 Run Tests

```bash
npm test
```

---

## 📄 License

MIT © Patrick Nassar
### Have fun :)
