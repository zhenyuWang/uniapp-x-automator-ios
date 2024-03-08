let page;
const pageUrl = '/pages/component/index';
describe(pageUrl, () => {

	beforeAll(async () => {
		page = await program.reLaunch(pageUrl)
		await page.waitFor(1000);
	})

	it('element.data', async () => {
		const element = await page.$('#sub-component')
		expect(await element.data('text')).toBe('hello world')
	})

	it('element.data by class', async () => {
		const element = await page.$('.sub-component')
		expect(await element.data('text')).toBe('hello world')
	})

	it('custom component $', async () => {
		const element = await page.$('.sub-component')
		expect(await (await element.$('.text')).text()).toBe('this is sub component')
	})

	it('element.setData', async () => {
		const element = await page.$('.sub-component')
		await element.setData({
			text: 'hello world 2024'
		})
		expect(await element.data('text')).toBe('hello world 2024')
	})
	
	it('callMethod', async () => {
		const element = await page.$('.sub-component')
		await element.callMethod('addNum')
		expect(JSON.stringify(await element.data('nums'))).toBe('[1,2,3,4,5]')
	})
	
	it('callMethod with params', async () => {
		const element = await page.$('.sub-component')
		await element.callMethod('addNum', 8)
		expect(JSON.stringify(await element.data('nums'))).toBe('[1,2,3,4,5,8]')
	})
	
	it('callMethod again', async () => {
		const element = await page.$('.sub-component')
		await element.callMethod('deleteNum')
		expect(JSON.stringify(await element.data('nums'))).toBe('[1,2,3,4,5]')
	})
	
})