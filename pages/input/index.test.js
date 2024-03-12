let page;
const pageUrl = '/pages/input/index';
describe(pageUrl, () => {

	beforeAll(async () => {
		page = await program.reLaunch(pageUrl)
		await page.waitFor(1000);
	})

	it('input', async () => {
		const element = await page.$('#input')
	  expect(await element.value()).toEqual('init value');
		await element.input('first edit')
		expect(await element.value()).toEqual('first edit');
	})
	
	it('textarea input', async () => {
		const element = await page.$('#textarea')
	  expect(await element.value()).toEqual('textarea init value');
		await element.input('textarea first edit')
		expect(await element.value()).toEqual('textarea first edit');
		expect(await page.data('textareaValue')).toEqual('textarea first edit');
	})
	
})