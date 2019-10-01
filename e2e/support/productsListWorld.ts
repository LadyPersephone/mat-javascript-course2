import {World} from "cucumber";

declare module "cucumber" {

    // Enforces the format of our test data
    
    // A template for 'product' test data
    interface World {
        product: myLib.Product;
    }
}