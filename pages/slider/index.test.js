let page;
const pageUrl = '/pages/slider/index';
describe(pageUrl, () => {

	beforeAll(async () => {
		page = await program.reLaunch(pageUrl)
	})

	it('slideTo', async () => {
		const element = await page.$('#slider')
		expect(Number(await element.attribute('value'))).toEqual(20);
		await element.slideTo(30);
		expect(Number(await element.attribute('value'))).toEqual(30);
		await element.slideTo(90);
		expect(Number(await element.attribute('value'))).toEqual(90);
	})

})