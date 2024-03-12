let page;
const pageUrl = '/pages/page/index';
describe(pageUrl, () => {

	beforeAll(async () => {
		page = await program.reLaunch(pageUrl + '?name=xiaowang')
	})

	it('测试page.path', async () => {
		expect(page.path).toEqual(pageUrl.substring(1))
	})

	it('测试page.query', async () => {
		expect(page.query).toEqual({
			name: 'xiaowang'
		})
	})

	it('测试page.$之类选择器', async () => {
		const element = await page.$('.name');
		expect(await element.text()).toEqual('小王')
	})

	it('测试page.$之ID选择器', async () => {
		const element = await page.$('#age');
		expect(await element.text()).toEqual('18')
	})

	it('测试page.$之标签选择器', async () => {
		const element = await page.$('text');
		expect(await element.text()).toEqual('打篮球')
	})

	it('测试page.$$之类选择器 | page.data', async () => {
		const elementList = await page.$$('.fruit');
		const fruit = await page.data('fruit');
		for (const i in elementList) {
			expect(await elementList[i].text()).toEqual(fruit[i])
		}
		expect(elementList.length).toEqual(3)
	})

	it('测试page.$$之id选择器', async () => {
		const elementList = await page.$$('#fruit');
		const fruit = await page.data('fruit');
		for (const i in elementList) {
			expect(await elementList[i].text()).toEqual(fruit[i])
		}
		expect(elementList.length).toEqual(3)
	})

	it('测试page.$$之标签选择器', async () => {
		const elementList = await page.$$('button');
		const fruit = await page.data('fruit');
		for (const i in elementList) {
			expect(await elementList[i].text()).toEqual(fruit[i])
		}
		expect(elementList.length).toEqual(3)
	})

	it('测试waitFor', async () => {
		const beforeTime = Date.now();
		await page.waitFor(2000);
		expect(Date.now() - beforeTime).toBeGreaterThanOrEqual(2000);
		await page.waitFor('.delay-view');
		const element = await page.$('.delay-view')
		expect(await element.text()).toEqual('这个内容延迟展示');
	})

	it('测试waitFor函数', async () => {
		await page.waitFor(async () => {
			return await page.data('showDelay')
		});
		const element = await page.$('.delay-view')
		expect(await element.text()).toEqual('这个内容延迟展示')
	})

	it('设置页面渲染数据 page.setData', async () => {
		await page.setData({
			fruit: [
				'龙眼'
			]
		})
		const fruit = await page.data('fruit');
		expect(fruit).toEqual(['龙眼'])
	})

	it('测试获取页面大小 page.size', async () => {
		const pageSize = await page.size()
		expect(pageSize.width).toBeGreaterThan(200)
		expect(pageSize.height).toBeGreaterThan(600)
	})

	it('测试获取页面的滚动位置', async () => {
		await page.setData({
			scrollTop: 80
		})
		const scrollTop = await page.scrollTop()
		expect(scrollTop).toEqual(80)
	})

	it('测试调用方法', async () => {
		await page.callMethod('changeDelay', false)
		expect(await page.data('showDelay')).toEqual(false);
		await page.waitFor(2000);
		await page.callMethod('changeDelay', true)
		expect(await page.data('showDelay')).toEqual(true);
	})

});