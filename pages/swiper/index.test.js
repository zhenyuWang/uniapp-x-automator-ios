let page;
const pageUrl = '/pages/swiper/index';
describe(pageUrl, () => {

	beforeAll(async () => {
		page = await program.reLaunch(pageUrl)
	})

	it('swipeTo', async () => {
		const element = await page.$('#swiper')
		await element.swipeTo(1);
		expect(Number(await element.attribute('current'))).toEqual(1);
		await element.swipeTo(2);
		expect(Number(await element.attribute('current'))).toEqual(2);
	})

})