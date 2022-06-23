const trendingDiv = document.getElementById("trending");
const feedsDiv = document.getElementById("feed");
const suggestions = document.getElementById("suggestions");
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");

const hashtagsArray = [
  "fashion",
  "art",
  "tech",
  "travel",
  "photography",
  "popular",
  "trending",
  "film",
  "retro",
  "topcreators",
];
const facesObj = {};

fetch(
  "https://api.unsplash.com/search/photos/?&query=people&orientation=squarish&client_id=hjRE5t2RVXBqp561CfadH4aoW5oMSuEhDXsDxFJJ_nU"
)
  .then((response) => response.json())
  .then((data) => {
    const { results } = data;
    const trending = results.map((result, index) => {
      return `
      <div class="trending-divs">
      <img src=${result.urls.regular} alt="" class="trending-img"  />
      
      <div class="trending-small-div">
      <img src=${result.user.profile_image.medium} alt="" class="trending-profile-img"  />
      <small class="trending-smalls">${result.user.name}</small>
      </div>
      <span>#${hashtagsArray[index]}</span>
      </div>
      `;
    });
    trendingDiv.innerHTML += trending.join("");
  });

fetch(
  "https://api.unsplash.com/search/photos/?&query=friends&orientation=portrait&client_id=hjRE5t2RVXBqp561CfadH4aoW5oMSuEhDXsDxFJJ_nU"
)
  .then((response) => response.json())
  .then((data) => {
    const { results } = data;
    console.log(results);
    const feeds = results.map((result, index) => {
      // if()
      return `
          <div class="feed-divs">
           <div class="feed-small-div">
            <img src=${result.user.profile_image.large} alt="" class="feed-profile-img"  />
            <div class="feed-span-div">
              <span>${result.user.name}</span>
              <span>${result.user.location}</span>
              <span>#${result.alt_description}</span>
            </div>
          </div>
          <div class="feed-main">
            <img src="./images/play.svg" alt="play svg" class="play">
            <img src=${result.urls.regular} alt="" class="feed-main-img"  />
            <div class="feed-reactions">
              <img src="./images/favorite.svg" onclick="favorite(${index})" alt="love svg" class="reactions favorite" id="favorite" >
              <img src="./images/comment.svg" alt="comments svg" class="reactions">
              <img src="./images/send.svg" alt="share svg" class="reactions">
              <img src="./images/bookmark.svg" alt="save svg" class="reactions bookmark" id="bookmark" >
              <img src="./images/share.svg" alt="save svg" class="reactions">
            </div>
          </div>
          
          </div>
          `;
    });

    feedsDiv.innerHTML = feeds.join("");
  });

btnLeft.addEventListener("click", () => {
  trending.scrollBy(-100, 0);
});

btnRight.addEventListener("click", () => {
  trending.scrollBy(100, 0);
});

function favorite(index) {
  const { target } = event;
  target.classList.toggle("like");
  console.log(index);
}
