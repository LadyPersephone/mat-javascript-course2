import { $, by, element } from "protractor";

export class HomePage {
public addProductButton = $('.mat-flat-button.mat-primary');

/**
 * Find a 'Product' in the table
 *
 * @param Product - this is a product (name, description, price) that we want to find in the table.
 * @returns the element that is found (anElementFinder).
 */
public findProductInTable = (product: myLib.Product) => {
    return element(by.cssContainingText(".mat-cell", product.name));
};

/**
 * Find a 'Product' in the table
 * 
 * @param Product - this is a product (name, description, price) that we want to find in the table.
 * @returns the element that is found (an ElementFinder).
 */
    public findProductsInTable = (product: myLib.Product) => {
        return element.all(by.cssContainingText(".mat-cell", product.name));
    };
    

}