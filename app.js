const $gifContainer = $('[data-giphy-container]');
const $searchInput = $('[data-giphy-search-input]');

const appendGif = (response) => {
  let randomNumber = Math.floor(Math.random() * 50) + 1;
  try {
    let randomImage = response.data[randomNumber];
    let imageUrl = randomImage.images.original.url;
    let $newDiv = $("<div>", {class: "col-md-4 col-12 mb-4 p-4"});
    let $newImg = $("<img>", {src: imageUrl});
    $newDiv.append($newImg);
    $gifContainer.append($newDiv);
  } catch (e) {
    alert('Please submit a giphy theme!');
  }
}

$("form").on("submit", async function(e) {
  e.preventDefault();
  let searchValue = $searchInput.val();
  $searchInput.val("");
  let queryStringParams = {
      params: {
        q: searchValue,
        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
      }
  }
  const response = await axios.get("https://api.giphy.com/v1/gifs/search", queryStringParams);
  appendGif(response.data);
});

$('[data-remove-giphys]').on("click", function() {
  $gifContainer.empty();
});