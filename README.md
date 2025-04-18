# string-playground

String utility functions for clean and consistent text handling in TypeScript and JavaScript.

---

## 🚀 Features

- Convert strings to `slug`, `camelCase`, or `dot.case`
- Capitalize the first word or every word
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

### 1. toSlug(str)
- Converts text to a URL-friendly slug. Replaces spaces and underscores with hyphens and removes special characters.
```bash
import { toSlug } from 'string-playground';
toSlug("Hello World!")  // Output: "hello-world"
```

### 2. capitalizeFirstWord(str)
- Capitalizes just the first character of the first word.
```bash
import { capitalizeFirstWord } from 'string-playground';
capitalizeFirstWord("  hello world") // Output: "Hello world"
```

### 3. capitalizeWords(str)
- Capitalizes the first letter of each word in the string.
```bash
import { capitalizeWords } from 'string-playground';
capitalizeWords("  hello world from js") // Output: "Hello World From Js"
```

### 4. camelCase(str)
- Converts text to camelCase
```bash
import { camelCase } from 'string-playground';
camelCase("hello world from js") // Output: "helloWorldFromJs"
```

### 5. countWords(str)
- Counts the number of words in a string
```bash
import { countWords } from 'string-playground';
countWords("  Hello    world again ") // Output: 3
```

### 6. removeNumbers(str)
- Removes all numeric characters.
```bash
import { removeNumbers } from 'string-playground';
removeNumbers("abc123def456") // Output: "abcdef"
```

### 7. onlyLetters(str)
- Removes everything except letters and spaces.
```bash
import { onlyLetters } from 'string-playground';
onlyLetters("Hello 123! How's it going?") // Output: "Hello  Hows it going"
```

### 8. removeExtraSpaces(str)
- Cleans up extra spaces and leaves only single spaces.
```bash
import { removeExtraSpaces } from 'string-playground';
removeExtraSpaces("  Too   many     spaces  ") // Output: "Too many spaces"
```

### 9. dotCase(str)
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
