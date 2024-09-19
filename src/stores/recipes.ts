import type { Recipe } from '@/interfaces'
import { defineStore } from 'pinia'

export const useRecipesStore = defineStore('recipes', {
    state: () => ({ recipes: [] as Recipe[] }),
    actions: {
        fetchRecipes() {
            // TODO: Replace dummy data with call to API (when it exists)
            this.recipes = [
                {
                    uuid: 'fake-uuid',
                    name: 'Cheese toastie',
                    ingredients: [
                        {
                            name: 'Bread',
                            amount: 2,
                            unit: 'slices'
                        },
                        {
                            name: 'Cheese',
                            amount: 200,
                            unit: 'grams'
                        }
                    ],
                    steps: ['Assemble cheese toastie', 'Toast'],
                    prepTime: 2,
                    cookTime: 3
                },

                {
                    uuid: 'fake-uuid-2',
                    name: 'Cream toastie',
                    description:
                        'A scrumptious toastie inspired by the classic cheese toastie, but with a creamy twist!',
                    ingredients: [
                        {
                            name: 'Bread',
                            amount: 2,
                            unit: 'slices'
                        },
                        {
                            name: 'Cream',
                            amount: 200,
                            unit: 'grams'
                        }
                    ],
                    steps: ['Assemble cheese toastie', 'Toast'],
                    prepTime: 2,
                    cookTime: 3
                }
            ]
        }
    }
})
