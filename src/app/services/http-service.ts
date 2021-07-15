import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HttpService {

    constructor(
        private http: HttpClient
    ) { }

    // private baseUrl = 'https://ng-recipebook-9b637-default-rtdb.firebaseio.com/recipes.json';

    drawCard(deck) {
        return this.http.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`);
    }

    getNewDeckSub$() {
        return this.http.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    }

}




    // storeRecipes() {
    //     const recipes = this.recipeService.getRecipes();
    //     this.http.put(this.baseUrl, recipes).subscribe(res => {
    //         console.log('PUT REQ:::' + res);
    //     });
    // }

    // fetchRecipes() {
    //     return this.http.get<Recipe[]>(this.baseUrl
    //     ).pipe(
    //         map(recipes => {
    //             return recipes.map(recipe => {
    //                 return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
    //             });
    //         }),
    //         tap(recipes => {
    //             this.recipeService.setRecipes(recipes);
    //         })
    //     )
    // }