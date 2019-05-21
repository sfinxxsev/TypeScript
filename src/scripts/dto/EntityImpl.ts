import {Entity} from "./interfaces/Entity";

class EntityImpl implements Entity{
    private _name:string;
    private _uid:number;

    constructor(name: string, uid: number) {
        this._name = name;
        this._uid = uid;
    }


    getName(): string {
        return this._name;
    }

    getUID(): number {
        return this._uid;
    }

    setName(value: string): void {
        this._name = value;
    }

    setUID(value: number): void {
        this._uid = value;
    }

}

export { EntityImpl };
