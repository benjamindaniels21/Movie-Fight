const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "9649bc20",
      s: searchTerm,
    },
  });
  console.log(response.data);
};

const onInput = (event) => {
  fetchData(event.target.value);
};

const input = document.querySelector("input");
input.addEventListener("input", onInput);
