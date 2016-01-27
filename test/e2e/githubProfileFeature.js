describe("Github Profile finder", function() {
  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });


  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

  it('finds spike01 in an ElementArrayFinder of spikes', function(){
    searchBox.sendKeys('spike0');
    searchButton.click();
    var profiles = element.all(by.repeater("user in searchCtrl.searchResult.items"));
    expect(profiles.getText()).toContain('spike01');
  });
});

// browser.pause to debug - this will keep the browser window open; interact via
// bash by entering 'repl' and using protractor webdriver syntax
