import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards');

function getUserCards(username) {
  axios.get(`https://api.github.com/users/${username}`)
  .then(res => {
    cards.appendChild(cardMaker(res.data))
  })
  .catch(err => console.error(err));
}

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['harrisclark', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(username => {
  getUserCards(username);
})

function cardMaker(userData) {
  const card = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const nameHeader = document.createElement('h3');
  const usernameP = document.createElement('p');
  const locationP = document.createElement('p');
  const profileP = document.createElement('p');
  const profileLink = document.createElement('a');
  const followersP = document.createElement('p');
  const followingP = document.createElement('p');
  const bioP = document.createElement('p');

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  nameHeader.classList.add('name');
  usernameP.classList.add('username');

  cardImg.src = userData.avatar_url;
  nameHeader.textContent = userData.name;
  usernameP.textContent = userData.login;
  locationP.textContent = `Location: ${userData.location}`;
  profileP.textContent = 'Profile: ';
  profileLink.textContent = userData.html_url;
  profileLink.href = userData.html_url;
  followersP.textContent = `Followers: ${userData.followers}`;
  followingP.textContent = `Following: ${userData.following}`;
  bioP.textContent = `Bio: ${userData.bio}`;

  card.appendChild(cardImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(nameHeader);
  cardInfo.appendChild(usernameP);
  cardInfo.appendChild(locationP);
  cardInfo.appendChild(profileP);
  profileP.appendChild(profileLink);
  cardInfo.appendChild(followersP);
  cardInfo.appendChild(followingP);
  cardInfo.appendChild(bioP);

  return card;
}
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
