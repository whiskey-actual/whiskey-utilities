export default class ListInsertion {
    public constructor(position:number, itemsToInsert:string[]) {
        this.itemPosition = position
        this.itemsToInsert = itemsToInsert
    }
    public itemPosition:number=0
    public itemsToInsert:string[]=[]
}