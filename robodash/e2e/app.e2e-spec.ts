import { RobodashPage } from './app.po';

describe('robodash App', () => {
  let page: RobodashPage;

  beforeEach(() => {
    page = new RobodashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
