export default class ListInsertionWithRemoval {
    public constructor(position:number, itemsToInsert:string[], itemsToRemove:number[]) {
        this.itemPosition = position
        this.itemsToInsert = itemsToInsert
        this.itemsToRemove = itemsToRemove
    }
    public readonly itemPosition:number=0
    public readonly itemsToInsert:string[]=[]
    public readonly itemsToRemove:number[]=[]
}