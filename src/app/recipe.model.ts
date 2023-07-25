export class Recipe {
    constructor(
        public id: number,
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

// Methods
