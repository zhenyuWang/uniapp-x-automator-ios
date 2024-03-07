describe('basic', () => {
  let page
  
  beforeAll(async () => {
    page = await program.reLaunch('/pages/index/index')
    await page.waitFor(1000)
  });
  
  it('Page.$', async () => {
    const title = await page.$('.title')
    expect(await title.text()).toBe('Hello')
  })
});