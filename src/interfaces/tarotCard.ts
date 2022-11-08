
interface Descriptions{
    normal:string,
    inverted:string
}
export interface tarotCard{
    name:string,
    image: string,
    userEmail:string,
    isPermanentCard: boolean,
    love: Descriptions,
    luck: Descriptions,
    deploy: Descriptions,
    createdAt:string
}