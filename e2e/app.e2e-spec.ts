import { FinalPage } from './app.po';

describe('final App', () => {
  let page: FinalPage;

  beforeEach(() => {
    page = new FinalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
