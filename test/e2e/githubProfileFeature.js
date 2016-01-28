var mock = require('protractor-http-mock');

describe("Github Profile finder", function() {
  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));

  beforeEach(function(){
    mock([{
      request: {
        path: "https://api.github.com/search/users",
        method: 'GET',
        queryString: {
          access_token: '1d3248a38288cbd1f150ac55a3c721a890b21ca7',
          q: 'spike0'
        }
      },
      response: {
        data: {
          items: [
            {
              "login": "spike01",
              "id": 7307631,
              "avatar_url": "https://avatars.githubusercontent.com/u/7307631?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/spike01",
              "html_url": "https://github.com/spike01",
              "followers_url": "https://api.github.com/users/spike01/followers",
              "following_url": "https://api.github.com/users/spike01/following{/other_user}",
              "gists_url": "https://api.github.com/users/spike01/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/spike01/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/spike01/subscriptions",
              "organizations_url": "https://api.github.com/users/spike01/orgs",
              "repos_url": "https://api.github.com/users/spike01/repos",
              "events_url": "https://api.github.com/users/spike01/events{/privacy}",
              "received_events_url": "https://api.github.com/users/spike01/received_events",
              "type": "User",
              "site_admin": false,
              "score": 46.7116
            },
            {
              "login": "spike008t",
              "id": 262459,
              "avatar_url": "https://avatars.githubusercontent.com/u/262459?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/spike008t",
              "html_url": "https://github.com/spike008t",
              "followers_url": "https://api.github.com/users/spike008t/followers",
              "following_url": "https://api.github.com/users/spike008t/following{/other_user}",
              "gists_url": "https://api.github.com/users/spike008t/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/spike008t/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/spike008t/subscriptions",
              "organizations_url": "https://api.github.com/users/spike008t/orgs",
              "repos_url": "https://api.github.com/users/spike008t/repos",
              "events_url": "https://api.github.com/users/spike008t/events{/privacy}",
              "received_events_url": "https://api.github.com/users/spike008t/received_events",
              "type": "User",
              "site_admin": false,
              "score": 22.66219
            },
            {
              "login": "Spike0",
              "id": 9982082,
              "avatar_url": "https://avatars.githubusercontent.com/u/9982082?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/Spike0",
              "html_url": "https://github.com/Spike0",
              "followers_url": "https://api.github.com/users/Spike0/followers",
              "following_url": "https://api.github.com/users/Spike0/following{/other_user}",
              "gists_url": "https://api.github.com/users/Spike0/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/Spike0/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/Spike0/subscriptions",
              "organizations_url": "https://api.github.com/users/Spike0/orgs",
              "repos_url": "https://api.github.com/users/Spike0/repos",
              "events_url": "https://api.github.com/users/Spike0/events{/privacy}",
              "received_events_url": "https://api.github.com/users/Spike0/received_events",
              "type": "User",
              "site_admin": false,
              "score": 20.415907
            }
          ]}
        }
      }
    ]);
  });

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  afterEach(function(){
    mock.teardown();
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

  it('finds spike01 in an ElementArrayFinder of spikes', function(){
    browser.pause();
    searchBox.sendKeys('spike0');
    searchButton.click();
    var profiles = element.all(by.repeater("user in searchCtrl.searchResult.items"));
    expect(profiles.getText()).toContain('spike01');
  });
});

// browser.pause to debug - this will keep the browser window open; interact via
// bash by entering 'repl' and using protractor webdriver syntax
