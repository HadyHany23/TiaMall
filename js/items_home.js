fetch("js/items.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
