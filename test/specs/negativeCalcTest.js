describe('Super Calculator', () => {
    it('Should calculate invalid values', async () => {

        await browser.url('http://juliemr.github.io/protractor-demo/');

        let firstInput = await $('[ng-model="first"]');
        let secondInput = await $('[ng-model="second"]');
        let operator = await $('[ng-model="operator"]');
        let goBtn = await $('#gobutton');
        let mainResult = await $('h2');
        let historyResult = await $$('tbody td:nth-child(3)');

        await firstInput.setValue('');
        await secondInput.setValue('');
        await operator.selectByAttribute('value', 'ADDITION');
        await goBtn.click();
        await expect(mainResult).toBeExisting();
        await expect(mainResult).toHaveTextContaining('NaN');


        await firstInput.setValue('20');
        await secondInput.setValue('');
        await operator.selectByAttribute('value', 'DIVISION');
        await goBtn.click();
        await expect(mainResult).toBeExisting();
        await expect(mainResult).toHaveTextContaining('NaN');

        await expect(historyResult).toBeExisting();
        await expect(historyResult[0]).toHaveTextContaining('NaN');
        await expect(historyResult[1]).toHaveTextContaining('Nan');

    })
})