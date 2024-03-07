describe('测试 program API', () => {
  const currentPage = '/pages/program/index'
  const homePage = '/pages/index/index'
  const tabBarPage = '/pages/tabBar/first'
  let page

  beforeAll(async () => {
    page = await program.reLaunch(currentPage)
  });

  it('pageStack', async () => {
    const pageStack = await program.pageStack()
    expect(pageStack.length).toBe(1)
    expect(pageStack[0].path).toBe(currentPage.substring(1))
  })

  it('navigateTo', async () => {
    page = await program.navigateTo(homePage)
    expect(page.path).toBe(homePage.substring(1))
  })

  it('navigateBack', async () => {
    page = await program.navigateBack()
    expect(page.path).toBe(currentPage.substring(1))
  })

  it('redirectTo', async () => {
    page = await program.redirectTo(homePage)
    expect(page.path).toBe(homePage.substring(1))
  })

  it('switchTab', async () => {
    page = await program.switchTab(tabBarPage)
    expect(page.path).toBe(tabBarPage.substring(1))
  })

  it('currentPage', async () => {
    await program.navigateTo(currentPage)
    page = await program.currentPage()
    expect(page.path).toBe(currentPage.substring(1))
  })

  it('systemInfo', async () => {
    const systemInfoKeys = [
      'appId', 'appLanguage', 'appName', 'appVersion', 'appVersionCode',
      'brand', 'deviceId', 'deviceBrand', 'deviceModel', 'deviceType', 'language',
    ]
    systemInfo = await program.systemInfo()
    for (let i = 0;i < systemInfoKeys.length; i++) {
      const key = systemInfoKeys[i]
      const value = systemInfo[key];
      expect(value.length).toBeGreaterThan(0);
    }
  })
  
  // it('pageScrollTo', async () => {
    // ios 暂未支持该 API
  //   await program.pageScrollTo(20)
  //   console.log(await page.scrollTop())
  // })

  it('callUniMethod', async () => {
    const data = 'test data'
    await program.callUniMethod('setStorage', {
      key: 'test',
      data
    })
    expect(await program.callUniMethod('getStorageSync', 'test')).toBe(data)
  })

  // it('screenshot', async () => {
    // ios 暂未支持截图 API
  //   const image = await program.screenshot();
  //   expect(image).toMatchImageSnapshot();
  // })
});