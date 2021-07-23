export class Nutriment {
    carbohydrates_100g:number;
    fat_100g:number;
    fiber_100g:number;

  constructor(
    carbohydrates_100g: number, 
    fat_100g: number, 
    fiber_100g: number, 
    proteins_100g: number, 
    energy: number
) {
    this.carbohydrates_100g = carbohydrates_100g
    this.fat_100g = fat_100g
    this.fiber_100g = fiber_100g
    this.proteins_100g = proteins_100g
    this.energy = energy
  }
    proteins_100g:number
    energy:number;
}