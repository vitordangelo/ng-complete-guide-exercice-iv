import { NgCompleteGuideExerciceIvPage } from './app.po';

describe('ng-complete-guide-exercice-iv App', () => {
  let page: NgCompleteGuideExerciceIvPage;

  beforeEach(() => {
    page = new NgCompleteGuideExerciceIvPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
