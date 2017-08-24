import { CreatingNg2StatelessComponentPage } from './app.po';

describe('creating-ng2-stateless-component App', function() {
  let page: CreatingNg2StatelessComponentPage;

  beforeEach(() => {
    page = new CreatingNg2StatelessComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
