export interface User{
    name?:string |undefined;
    role?: 'user' | 'admin' | undefined,
    isVoted?: boolean |undefined,
    isTarotCardSend?: boolean |undefined,

}

// 'role' is optional in type '{ name?: string | undefined; role?: "user" | "admin" | undefined; isVoted?: boolean | undefined; isTarotCardSend?: boolean | undefined; }' but required in type 'User'