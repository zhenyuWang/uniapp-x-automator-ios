describe('Element API', () => {
  let page;
  const pageUrl = '/pages/element/index';

  beforeAll(async () => {
    page = await program.reLaunch(pageUrl)
  })

  it('tagName', async () => {
    const viewEl = await page.$('view')
    expect(viewEl.tagName).toBe('view')
    
    const textEl = await page.$('text')
    expect(textEl.tagName).toBe('text')
  })
  
  it('$', async () => {
    const textContainer = await page.$('.text-container')
    const textEl = await textContainer.$('.my-text')
    expect(await textEl.text()).toBe('this is text 1')
    
    const componentFoo = await page.$('.component-foo')
    const fooText = await componentFoo.$('.foo-text')
    expect(await fooText.text()).toBe('this is foo text 1')
  })
  
  it('$$', async () => {
    const textContainer = await page.$('.text-container')
    const textElList = await textContainer.$$('.my-text')
    expect(textElList.length).toBe(2)
    expect(await textElList[0].text()).toBe('this is text 1')
    expect(await textElList[1].text()).toBe('this is text 2')
    
    const componentFoo = await page.$('.component-foo')
    const fooTextList = await componentFoo.$$('.foo-text')
    expect(fooTextList.length).toBe(2)
    expect(await fooTextList[0].text()).toBe('this is foo text 1')
    expect(await fooTextList[1].text()).toBe('this is foo text 2')
  })
});