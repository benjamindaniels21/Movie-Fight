const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "9649bc20",
      s: searchTerm,
    },
  });

  return response.data.Search;
};

const input = document.querySelector("input");

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
