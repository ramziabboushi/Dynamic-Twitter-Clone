var user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var user2 = {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};
// header
var header = document.querySelector('#header');
var headerContents = document.createElement('div');
headerContents.classList.add('header-contents');
headerContents.innerHTML = `
                    <i class="fas fa-arrow-left"></i>
                    <h4 class="header-name">${user1.displayName}</h4>
                    <img class="verified" src="https://img.icons8.com/color/48/000000/verified-badge.png"/>
                    <p class="header-tweets">${user1.tweets.length} Tweets </p>
                    `;
header.appendChild(headerContents)

// cover photo
var coverPhotoCtr = document.querySelector('.cover-photo-ctr');
coverPhotoCtr.style.backgroundImage = `url('${user1.coverPhotoURL}')`;

// profile details
var profileCtr = document.querySelector('.profile-ctr');
var profileContents = document.createElement('div');
profileContents.classList.add('profile-contents')
profileContents.innerHTML = `
<div class="dp-buttons"> 
    <a href="https://twitter.com/elonmusk/photo">
    <img src="${user1.avatarURL}">
    </a>
    <button> Follow </button>
</div>
<div class="names">
    <h4 class="name">${user1.displayName}</h4>
    <p class="username">${user1.userName}</p>
</div>
<div class="join-date">
<p id="joined">Joined ${user1.joinedDate}</p>
</div>
<div class="follow-info">
<p class="follow-num">${user1.followingCount}</p>
<p class="follow-label">Following</p>
<p class="follow-num">${user1.followerCount.toString().slice(0,2)}M</p>
<p class="follow-label">Followers</p> 
</div>
`;
profileCtr.appendChild(profileContents)

//generating divs with tweets from JSONs
var tweetsCtr = document.querySelector('.tweets-ctr');
user1.tweets.forEach(function(tweet) {
    tweetDiv = document.createElement('div');
    tweetDiv.classList.add('tweet-ctr');
    tweetDiv.innerHTML = `
        <div class='tweet-dp-ctr'>
            <a href="https://twitter.com/elonmusk/photo">
            <img src="${user1.avatarURL}"></a>
        </div>
        <div class="tweet-content-ctr">
            <div class="tweet-top">
                <h5>${user1.displayName}</h5>
                <p class="username">${user1.userName}</p>
                <i class="fas fa-ellipsis-h"></i>
            </div>
            <div class="tweet-middle">
                <p>${tweet.text}</p>
            </div>
            <div class="tweet-bottom">
                <div class="tweet-button">
                    <i class="far fa-comment"></i>
                </div>
                <div class="tweet-button">
                    <i class="fas fa-retweet"></i>
                </div>
                <div class="tweet-button">
                    <i class="far fa-heart"></i>
                </div>
                <div class="tweet-button">
                    <i class="fas fa-external-link-alt"></i>
                </div>
            </div>
        </div>
    `;
    tweetsCtr.appendChild(tweetDiv)
})
console.log(user1.tweets)

user1.tweets.forEach(function(tweet) {
    console.log(tweet.text)
})