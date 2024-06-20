const showData = async () => {
  try {
    const data = await fetch("data.json");
    const result = await data.json();
    console.log(result);
    return result;
  } catch (e) {
    alert(e.message);
  }
};

const updateHtml = (result) => {
  const container = document.querySelector(".resuts-content");
  container.innerHTML = "";
  i = 0;
  result.forEach((item) => {
    ++i;
    const categoryDiv = document.createElement("div");
    categoryDiv.className = `results-test-title-${i}`;
    categoryDiv.textContent = item.category;

    const results1Div = document.createElement("div");
    results1Div.className = `results-${i}`;
    const resultsDiv = document.createElement("div");
    resultsDiv.className = "results";
    resultsDiv.textContent = item.score;

    const percentageDiv = document.createElement("div");
    percentageDiv.className = "percentage";
    percentageDiv.textContent = "/ 100";

    resultsDiv.appendChild(percentageDiv);
    results1Div.appendChild(resultsDiv);
    categoryDiv.appendChild(results1Div);
    container.appendChild(categoryDiv);
  });
};

showData().then((result) => {
  updateHtml(result);
  console.log("datos:", result);
});
