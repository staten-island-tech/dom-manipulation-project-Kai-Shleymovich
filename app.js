const DOMSelectors = {
  form: document.getElementById('form'),
  nameinput: document.getElementById('color_name'),
  hexinput: document.getElementById('colors'),
  selector: document.querySelector(".flex-wrapper"),
  h2s : document.querySelectorAll("h2"),
};
DOMSelectors.form.addEventListener('submit',function(e){
  e.preventDefault()
  DOMSelectors.selector.insertAdjacentHTML(
    "beforeend",
    `      <div class="card">
    <h2>${DOMSelectors.nameinput.value}</h2>
    <div class="background" style="background-color:${DOMSelectors.hexinput.value}"></div>
    <button class="delbutton">Delete</button>
  </div>`,
  );
  const delbuttons = document.querySelectorAll('.delbutton')
  console.log(delbuttons)
  //foreach button add event listener to clear that instance of the card. and fix css
});
