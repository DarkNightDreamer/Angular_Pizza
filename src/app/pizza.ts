export class Pizza{
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get image(): string {
        return this._image;
    }
    public set image(value: string) {
        this._image = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get ingredients(): string {
        return this._ingredients;
    }
    public set ingredients(value: string) {
        this._ingredients = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    constructor(private _name: string,private _ingredients: string,private _image: string,private _price: number,private _description: string){}

}