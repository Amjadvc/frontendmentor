(() => {
  const dateEle = document.querySelector("#date");

  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "short" });
  const year = today.getFullYear();

  const formatDate = `${day} ${month} ${year}`;
  dateEle.innerHTML = formatDate;
})();
