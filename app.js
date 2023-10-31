const DOMSelectors = {
  form: document.getElementById('form'),
  nameinput: document.getElementById('color_name'),
  person_name_input: document.getElementById('name'),
  hexinput: document.getElementById('colors'),
  selector: document.querySelector(".flex-wrapper"),
  h2s : document.querySelectorAll("h2"),
};
DOMSelectors.form.addEventListener('submit',function(e){
  e.preventDefault()
  function makecard(){
    return `      <div class="card">
    <h2>${DOMSelectors.nameinput.value}</h2>
    <div class="background" style="background-color:${DOMSelectors.hexinput.value}"></div>
    <p>${DOMSelectors.person_name_input.value}</p>
    
    <button class="delbutton">Delete</button>
  </div>`
  }
  function insertcard() {
    DOMSelectors.selector.insertAdjacentHTML(
      "beforeend",
      makecard()
    );
  }
  insertcard()
  DOMSelectors.nameinput.value = ""
  DOMSelectors.hexinput.value=""
  DOMSelectors.person_name_input.value=""
});
DOMSelectors.selector.addEventListener("click",function(del){
  if(del.target.classList.contains('delbutton')){
    del.target.parentElement.remove();
  }
})

