export interface User{
    id?: string | undefined;
    name?:string |undefined;
    role?: 'user' | 'admin' | undefined,
    isVoted?: boolean |undefined,
    isTarotCardSend?: boolean |undefined,

}
