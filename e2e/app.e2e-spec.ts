import { Helloworld2Page } from './app.po';

describe('helloworld2 App', function() {
  let page: Helloworld2Page;

  beforeEach(() => {
    page = new Helloworld2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
