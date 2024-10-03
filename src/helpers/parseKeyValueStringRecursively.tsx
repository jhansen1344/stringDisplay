
const parseKeyValueStringRecursively = (inputString: string): Map<string, any> => {
    const parseKeyValueFromString = (keyValueString: string) => {
        const openParentheses = keyValueString.indexOf('(');
        const isSimpleKey = openParentheses === -1;
        if (isSimpleKey) {
            return [keyValueString, null];
        }
        const key = keyValueString.slice(0, openParentheses).trim();
        const value = keyValueString.slice(openParentheses + 1, -1);
        return [key, parseKeyValueStringRecursively(value)];
    }

    const sanitizeString = (rawString: string): string => {
        const hasOuterParenthesis = rawString[0] === '(' && rawString[rawString.length - 1] === ')';
        if (hasOuterParenthesis) {
            return rawString.substring(1, rawString.length - 1);
        }
        return rawString;
    }

    const sanitizedString = sanitizeString(inputString);

    const result = new Map();
    let currentKeyValueString = '';
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
            const trimmedKeyValuePair = currentKeyValueString.trim();
            const parsedResult = parseKeyValueFromString(trimmedKeyValuePair);
            result.set(parsedResult[0], parsedResult[1]);
            currentKeyValueString = '';
        } else {
            currentKeyValueString += char;
        }
    }

    if (currentKeyValueString.trim()) {
        const parsedResult = parseKeyValueFromString(currentKeyValueString.trim());
        result.set(parsedResult[0], parsedResult[1]);
    }

    return result;
}

export default parseKeyValueStringRecursively 