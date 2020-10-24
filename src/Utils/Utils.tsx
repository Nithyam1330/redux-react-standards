export const convertToUpperCase = (input: string) => {
    if (isValidInput(input)) {
        return input.toUpperCase()
    } else {
        return '';
    }
}

export const isNull = (input: any) => {
    if (input === null || input === 'null') {
        return true;
    } else {
        return false;
    }
}

export const isUndefined = (input: any) => {
    if (input === undefined || input === 'undefined') {
        return true;
    } else {
        return false;
    }
}

export const isValidInput = (input: any) => {
    if (!isNull(input) && !isUndefined(input)) {
        return true;
    } else {
        return false;
    }
}