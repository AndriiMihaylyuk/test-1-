describe('Super Calculator', () => {
    it('Should add two numbers', async() => {
        
        await browser.url('http://juliemr.github.io/protractor-demo/');
     
         let firstInput= await $('[ng-model="first"]');
         let secondInput= await $('[ng-model="second"]');
         let operator = await $('[ng-model="operator"]');
         let goBtn = await $('#gobutton');
         let mainResult = await $('h2');
         let historyResult = await $$('tbody td:nth-child(3)');
 
         await firstInput.setValue('10');
         await secondInput.setValue('11');
         await operator.selectByAttribute('value', 'ADDITION');
         await goBtn.click();
         await expect(mainResult).toBeExisting();
         await expect(mainResult).toHaveTextContaining('21');
         

         await firstInput.setValue('20');
         await secondInput.setValue('10');
         await operator.selectByAttribute('value', 'DIVISION');
         await goBtn.click();
         await expect(mainResult).toBeExisting();
         await expect(mainResult).toHaveTextContaining('2');

         await expect(historyResult).toBeExisting();
         await expect(historyResult[0]).toHaveTextContaining('2');
         await expect(historyResult[1]).toHaveTextContaining('21');

    })
})