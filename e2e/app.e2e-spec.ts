import { XeeInterfaceTmpPage } from './app.po';

describe('xee-interface-tmp App', function() {
  let page: XeeInterfaceTmpPage;

  beforeEach(() => {
    page = new XeeInterfaceTmpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
