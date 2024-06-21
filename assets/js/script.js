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
  const leftContainer = document.querySelector(".circle");
  const container = document.querySelector(".resuts-content");
  container.innerHTML = "";
  i = 0;
  let totalScore = 0;
  result.forEach((item) => {
    ++i;
    totalScore += item.score / 4;

    const categoryDiv = document.createElement("div");
    categoryDiv.className = `results-test-title-${i}`;
    categoryDiv.textContent = item.category;

    const iconImg = document.createElement("img");
    iconImg.className = "icon";
    iconImg.src = item.icon;

    const results1Div = document.createElement("div");
    results1Div.className = `results`;

    const resultsDiv = document.createElement("div");
    resultsDiv.className = "results";
    resultsDiv.textContent = item.score;

    const percentageDiv = document.createElement("div");
    percentageDiv.className = "percentage";
    percentageDiv.textContent = "/ 100";

    resultsDiv.appendChild(iconImg);
    resultsDiv.appendChild(percentageDiv);
    results1Div.appendChild(resultsDiv);
    categoryDiv.appendChild(results1Div);

    container.appendChild(categoryDiv);

    
  });
  const resultdiv = document.createElement("h1");
  resultdiv.textContent = ` ${totalScore}`;
  const resultto = document.createElement("spam")
  resultto.textContent="to 100"
  leftContainer.appendChild(resultdiv);
  leftContainer.appendChild(resultto)

};

showData().then((result) => {
  updateHtml(result);
  console.log("datos:", result);
});
