
interface Descriptions{
    normal:string,
    inverted:string
}
export interface tarotCard{
    name:string,
    url: string,
    description: string
    invertedDescription: string,
    love: Descriptions
    luck: Descriptions
    deploy: Descriptions
}