export class Recipe {
    constructor(
        public favourite: boolean,
        public id: number,
        public prepTime: number,
        public cookTime: number,
        public servings: number,
        public image: string,
        public name: string,
        public ingredients: Ingredient[], 
        public instructions: Instruction[]) 
        { }
}

export class Ingredient {
    constructor(
        public name: string,
        public amount: number,
        public unit: string) 
        { }
}

export class Instruction {
    constructor(
        public description: string) 
        { }
}