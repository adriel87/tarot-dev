export interface tarotCard{
    name:string,
    url: string,
    description: string
    invertedDescription: string,
    love:{
        normal:string,
        inverted:string
    },
    luck:{
        normal:string,
        inverted:string
    },
    deploy:{
        normal:string,
        inverted:string
    }
}