
const parseKeyValuePairsRecursively = (inputString: string): Map<string, any> => {
    const parseString = (keyValueString: string) => {
        const openParentheses = keyValueString.indexOf('(');
        const isSimpleKey = openParentheses === -1;
        if (isSimpleKey) {
            return [keyValueString, null];
        }
        const key = keyValueString.slice(0, openParentheses).trim();
        const value = keyValueString.slice(openParentheses + 1, -1);
        return [key, parseKeyValuePairsRecursively(value)];
    }

    const sanitizeString = (rawString: string): string => {
        if (rawString[0] === '(' && rawString[rawString.length - 1] === ')') {
            return rawString.substring(1, rawString.length - 1);
        }
        return rawString;
    }

    const sanitizedString = sanitizeString(inputString);

    const result = new Map();
    let currentKeyValuePair = '';
    let parenthesesCount = 0;

    for (let i = 0; i < sanitizedString.length; i++) {
        const char = sanitizedString[i];

        if (char === '(') {
            parenthesesCount++;
        }

        if (char === ')') {
            parenthesesCount--;
        }

        if (char === ',' && parenthesesCount === 0) {
            const trimmedKeyValuePair = currentKeyValuePair.trim();
            const parsedResult = parseString(trimmedKeyValuePair);
            result.set(parsedResult[0], parsedResult[1]);
            currentKeyValuePair = '';
        } else {
            currentKeyValuePair += char;
        }
    }

    if (currentKeyValuePair.trim()) {
        const parsedResult = parseString(currentKeyValuePair.trim());
        result.set(parsedResult[0], parsedResult[1]);
    }

    return result;
}

export default parseKeyValuePairsRecursively 