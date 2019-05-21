import {AbstractCar} from "./AbstractCar";

class SmallCar extends AbstractCar {
   private _liteCounter = 2;

   public addNewLight():void{
      this._liteCounter++;
   }

   get liteCounter():number {
       return this._liteCounter;
   }
}

export { SmallCar };
