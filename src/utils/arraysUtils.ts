export const getThreeRandomNumberArray = (limit: number) : number[]=>{
    const set = new Set<number>()
    const array :number[]=[];

    while(set.size < 3) set.add(Math.floor(Math.random() * (limit - 0 + 1)))
    set.forEach(value => array.push(value))

    return array;
}
