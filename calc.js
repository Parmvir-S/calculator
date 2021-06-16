document.body.addEventListener("click", event => {
    if (event.target.nodeName == "BUTTON") {
      console.log("Clicked", event.target.textContent);
      let click = event.target.textContent;

      console.log(Number(click) + 10);
    }
  });