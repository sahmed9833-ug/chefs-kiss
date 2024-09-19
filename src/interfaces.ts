/**
 * Interface representing a Recipe, time properties are in minutes.
 */
export interface Recipe {
    uuid: string
    name: string
    description?: string
    ingredients: Ingredient[]
    steps: string[]
    prepTime: number
    cookTime: number
}

export interface Ingredient {
    name: string
    amount: number
    unit: string
}
