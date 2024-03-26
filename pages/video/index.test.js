jest.setTimeout(10000000);
let page;
const pageUrl = '/pages/video/index';
describe(pageUrl, () => {

	beforeAll(async () => {
		page = await program.reLaunch(pageUrl)
		await page.waitFor(1000);
	})

	it('callContextMethod play', async () => {
		const element = await page.$('#video')
		console.log(await element.callContextMethod('play'))
	})
})