import { GreenStackPage } from './app.po';

describe('green-stack App', function() {
  let page: GreenStackPage;

  beforeEach(() => {
    page = new GreenStackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
