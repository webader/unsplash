// поиск по кнопке
document.querySelector("#input").addEventListener("keydown", (event) => {
if (event.key == "Enter") 
  document.querySelector("#grid").textContent = ""; 
  const url =  'https://api.unsplash.com/search/photos?query='+input.value+'&per_page=30&client_id=_foWWWtsZw2GIM9MQyzNKldN738LsKGoWCAkRn3ldfk'    // уть + ключ арі
  fetch(url)  
  .then(response => {
    if (!response.ok) throw Error(response.statusText);
      return response.json();
    })  
    .then(data => {
      loadImages(data);
    })  
    .catch(error => console.log(error));   // если в ответе ошибка
});
  
  // поиск по клику
document.querySelector("#search").addEventListener("click", () => {
  document.querySelector("#grid").textContent = ""; 
  const url =  'https://api.unsplash.com/search/photos?query='+input.value+'&per_page=30&client_id=_foWWWtsZw2GIM9MQyzNKldN738LsKGoWCAkRn3ldfk'    // уть + ключ арі
  fetch(url)  
  .then(response => {
    if (!response.ok) throw Error(response.statusText);
      return response.json();
    })  
    .then(data => {
      loadImages(data);
    })  
    .catch(error => console.log(error));   // если в ответе ошибка
});
 
loadImages = (data) => {
  for(let i = 0;i < data.results.length;i++){
    let image = document.createElement("div");
    image.className = "img";
    image.style.backgroundImage = "url("+data.results[i].urls.raw + "&w=1366&h=768" +")";
    image.addEventListener("dblclick", function(){
      window.open(data.results[i].links.download, '_blank');
    })
    document.querySelector("#grid").appendChild(image);
  }
}
  