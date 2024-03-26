describe('scroll-view', () => {

  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/scroll-view/index');
    await page.waitFor(300);
  });

  //检测竖向可滚动区域
  it('check_scroll_height', async () => {
    await page.setData({
      scrollX: false
    })
    await page.waitFor(300);
    const value = await page.callMethod('checkScrollHeight')
    expect(value).toBe(true)
  })

  //检测竖向scrolltop属性赋值
  it('check_scroll_top', async () => {
    await page.setData({
      scrollTop: 600
    })
    await page.waitFor(600)
    const element = await page.$('#scrollViewY')
    const scrollTop = await element.property("scrollTop")
    console.log("check_scroll_top---" + scrollTop)
    expect(scrollTop - 600).toBeGreaterThanOrEqual(0)
  })

  //检测竖向scroll_into_view属性赋值
  it('check_scroll_into_view_top', async () => {
    await page.setData({
      scrollIntoView: "item3"
    })
    await page.waitFor(600)
    const element = await page.$('#scrollViewY')
    const scrollTop = await element.property("scrollTop")
    console.log("check_scroll_into_view_top--" + scrollTop)
    await page.setData({
      scrollIntoView: ""
    })
    expect(scrollTop - 570).toBeGreaterThanOrEqual(0)
  })

  //检测横向可滚动区域
  it('check_scroll_width', async () => {
    await page.setData({
      scrollX: true
    })
    await page.waitFor(300);
    const value = await page.callMethod('checkScrollWidth')
    expect(value).toBe(true)
  })

  //检测横向scrollLeft属性赋值
  it('check_scroll_left', async () => {
    await page.setData({
      scrollLeft: 600
    })
    await page.waitFor(600)
    const element = await page.$('#scrollViewX')
    const scrollLeft = await element.property("scrollLeft")
    console.log("check_scroll_left---" + scrollLeft)
    expect(scrollLeft - 600).toBeGreaterThanOrEqual(0)
  })


  //检测横向scroll_into_view属性赋值
  it('check_scroll_into_view_left', async () => {
    await page.setData({
      scrollIntoView: "horizontal_item3"
    })
    await page.waitFor(600)
    const element = await page.$('#scrollViewX')
    const scrollLeft = await element.property("scrollLeft")
    console.log("check_scroll_into_view_left--" + scrollLeft)
    await page.setData({
      scrollIntoView: ""
    })
    expect(scrollLeft - 930).toBeGreaterThanOrEqual(0)
  })


  it('scrollTo Y', async () => {
    await page.setData({
      scrollX: false
    })
    const element = await page.$('#scrollViewY')
    console.log('element', element);
    await element.scrollTo(0, 34)
    expect(await element.property("scrollTop")).toBe(34)
  })

  // 检测srollTo
  it('scrollTo X', async () => {
    await page.setData({
      scrollX: true
    })
    await page.waitFor(500)
    const element = await page.$('#scrollViewX')
    await element.scrollTo(82, 0)
    expect(await element.property("scrollLeft")).toBe(82)
    await page.waitFor(500)
  })

});