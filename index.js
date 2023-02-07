const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "9649bc20",
      s: searchTerm,
    },
  });

  if (response.data.Error) {
    return [];
  }

  return response.data.Search;
};

const root = document.querySelector(".autocomplete");
root.innerHTML = `
  <label><b>Search for a Movie</b></label>
  <input class="input" />
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results"></div>
    </div>
  </div>
`;

const input = document.querySelector("input");
const dropdown = document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");

const onInput = async (e) => {
  const movies = await fetchData(e.target.value);
  for (let movie of movies) {
    const div = document.createElement("div");
    div.innerHTML = `
      <h1>${movie.Title}</h1>
      <img src="${movie.Poster}"/>
    `;
    document.querySelector("#target").appendChild(div);
  }

  console.log(movies);
};

input.addEventListener("input", debounce(onInput, 500));
