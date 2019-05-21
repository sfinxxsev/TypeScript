import {AbstractCar} from "./AbstractCar";

class Track extends AbstractCar {
    private trailer:string;

  public addTrailer(newTrailer:string):void{
      this.trailer = newTrailer;
  }

  public assembleCar(brand:string, model:string, ...additionalParameters:string[]):string {
      return super.assembleCar(brand, model, this.trailer);
  }
}

export { Track };
