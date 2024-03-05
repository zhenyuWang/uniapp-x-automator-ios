describe('/pages/index/index', () => {
  let page
  
  beforeAll(async () => {
    page = await program.currentPage()
    await page.waitFor(1000)
  });
  
  it('page get element', async () => {
    const title = await page.$('.title')
    expect(await title.text()).toBe('Hello')
  })
});