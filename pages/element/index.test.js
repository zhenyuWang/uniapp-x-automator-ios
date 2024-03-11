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
    
    const idTextEl = await page.$('#my-id-text')
    expect(await idTextEl.text()).toBe('this is id text')
    
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
  
  it('size', async () => {
    const textContainer = await page.$('.text-container')
    const textContainerSize = await textContainer.size()
    expect(textContainerSize.width).toBe(200)
    expect(textContainerSize.height).toBe(50)
  })
  
  it('offset', async () => {
    const testOffsetEl = await page.$('.test-offset')
    const testOffsetElOffset = await testOffsetEl.offset()
    expect(testOffsetElOffset.left).toBe(10)
    expect(testOffsetElOffset.top).toBe(10)
    
    const textContainer = await page.$('.text-container')
    const textContainerOffset = await textContainer.offset()
    expect(textContainerOffset.left).toBe(0)
    expect(textContainerOffset.top).toBe(0)
  })
  
  it('text', async () => {
    const myTextEl = await page.$('.my-text')
    const myTextElText = await myTextEl.text()
    expect(myTextElText).toBe('this is text 1')
  })
  
  it('attribute', async () => {
    const logo = await page.$('.logo')
    const logoSrc = await logo.attribute('src')
    expect(logoSrc).toBe('/static/logo.png')
    
    const textInput = await page.$('.text-input')
    const textInputType = await textInput.attribute('type')
    expect(textInputType).toBe('text')
    
    const numberInput = await page.$('#number-input')
    const numberInputType = await numberInput.attribute('type')
    expect(numberInputType).toBe('number')
  })
  
  it('property', async () => {
    const textInput = await page.$('.text-input')
    const textInputValue = await textInput.property('value')
    expect(textInputValue).toBe('text input')
    
    const numberInput = await page.$('#number-input')
    const numberInputValue = await numberInput.property('value')
    expect(numberInputValue).toBe(100)
  })
});