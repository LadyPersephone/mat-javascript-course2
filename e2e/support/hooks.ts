import { Before } from "cucumber";
import { browser } from "protractor";


Before({timeout: 100 * 1000}, async function() {
    
    // Opens the website to the default URL in the 'protractor.config.ts' file await browser.get("");
    await browser.get("");
    
});