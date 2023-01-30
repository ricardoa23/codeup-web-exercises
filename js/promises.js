// const myPromise = fetch('https://api.github.com/users', {'Authorization': `token ${keys.github}`}).then(response => {
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// })

(async () => {
  let searchUsername = "ricardoa23";
//   try {
//     const githubUser = await fetch("https://api.github.com/users", {
//       Authorization: `token ${keys.github}`,
//     });
//     let data = githubUser.json();
//     let userData = data;
//     return userData;
//   } catch (error) {
//     console.log(error);
//   }

// let searchUsers = (input1, input2) => input1.toLowerCae() === input2.toLowerCase();

  async function searchUser(user) {
    try {
      let response = await fetch(`https://api.github.com/users/${user}/events/public`, {
        Authorization: `token ${keys.github}`,
      });
      let data = response.json();
    return data;
    } catch (error) {
      console.log(error);
    }
  }
//   let user = searchUser(searchUsername);
//   searchUser(searchUsername).then(user => {
//     console.log(user)
//   });
  let user = await searchUser(searchUsername);
  console.log(user);
  console.log(user[0].created_at);
})();
