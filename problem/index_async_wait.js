const fetch = require("node-fetch")

let username = "jcawesome"
let url = `https://api.github.com/users/${username}`

  async function getUserInfo(username) {
    const url = `https://api.github.com/users/${username}`;
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error(
        `Failed to get user info for ${username}: ${resp.statusText}`
      );
    }
    return resp.json();
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



  async function getFollowingRepositories(username) {
    try {
      const user = await getUserInfo(username);
      console.log(`${username} is following ${user.following} users`);
  
      const followings = await getFollowings(username);
      const usernames = followings.map((user) => user.login);
      console.log("Following:", usernames);
  
      const reposList = await Promise.all(
        usernames.map((username) => getRepos(username))
      );
      const flattenedRepos = reposList.flat();
      const repoNames = flattenedRepos.map((repo) => repo.full_name);
      console.log("Total repos:", repoNames.length);
      console.log("Samples repos:", repoNames.slice(0, 5));
    } catch (error) {
      console.error(error);
    }
  }

  getFollowingRepositories(username)