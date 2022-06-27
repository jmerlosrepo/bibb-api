export const user:{ getUserData:object } = {
    getUserData: (email:string, password: string) => `SELECT * FROM users WHERE email = '${email}' AND password = '${password}';`
}