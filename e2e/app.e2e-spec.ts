import { ForUNotePage } from './app.po';

describe('for-unote App', () => {
  let page: ForUNotePage;

  beforeEach(() => {
    page = new ForUNotePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
