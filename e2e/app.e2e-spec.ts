import { DanyMeanAppPage } from './app.po';

describe('dany-mean-app App', function() {
  let page: DanyMeanAppPage;

  beforeEach(() => {
    page = new DanyMeanAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
