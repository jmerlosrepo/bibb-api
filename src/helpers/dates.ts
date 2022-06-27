export const getToday = ():string => {
    const today = new Date();
    return `${today.getMonth()}-${today.getDate()}-${today.getFullYear()}`;
}

export const getTime = ():string => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}
