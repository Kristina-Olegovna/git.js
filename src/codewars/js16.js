const stringToNumber = (str) => {
    const int = str*1;
    return int > Number.MAX_SAFE_INTEGER || int < Number.MIN_SAFE_INTEGER ? BigInt(int) : int;
}