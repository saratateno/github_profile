describe("GitUserSearchController", function() {
  beforeEach(module("GitUserSearch"));

  beforeEach(function(){
    // stub out searchFactory from the call
    fakeSearch = jasmine.createSpyObj('fakeSearch', ['query']);
    module({ Search: fakeSearch });
  });

  var ctrl, scope;

  beforeEach(inject(function($q, $controller, $rootScope ) {
    ctrl = $controller("GitUserSearchController");
    fakeSearch.query.and.returnValue($q.when({data: { items: 'cat' }}));
    scope = $rootScope;
  }));

  it("initialises with an empty search result and term", function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe("when searching for a user", function() {


    it("displays search results", function() {
      ctrl.searchTerm = 'hello';
      ctrl.doSearch();
      scope.$digest();
      expect(ctrl.searchResult.items).toEqual('cat');
    });
  });

});
