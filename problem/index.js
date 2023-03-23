const fetch = require("node-fetch")

let username = "jcawesome"
let url = `https://api.github.com/users/${username}`

  function getUserInfo(username) {
    // Given a username, returns the user info by calling GitHub user API
    const url = `https://api.github.com/users/${username}`;
    return fetch(url).then((resp) => {
      return resp.json();
    });
  }
  
  function getFollowings(username) {
    // Given a username, returns the list of users that the give user is following
    const url = `https://api.github.com/users/${username}/following`;
    return fetch(url).then((resp) => {
      return resp.json();
    });
  }
  
  function getRepos(username) {
    // Given a username, returns the list of repos
    const url = `https://api.github.com/users/${username}/repos`;
    return fetch(url).then((resp) => {
      return resp.json();
    });
  }



  function getFollowingRepositories(username) {
    getUserInfo(username)
      .then((user) => {
        console.log(`${username} is following ${user.following} users`);
        return getFollowings(username);
      })
      .then((followings) => followings.map((user) => user.login))
      .then((usernames) => {
        console.log("Following:", usernames);
        return Promise.all(usernames.map((username) => getRepos(username)));
      })
      .then((reposList) => {
        let flattenedRepos = reposList.flat();
        let repoNames = flattenedRepos.map((repo) => repo.full_name);
  
        console.log("Total repos:", repoNames.length);
        console.log("Samples repos:", repoNames.slice(0, 5));
      });
  }

  getFollowingRepositories(username)