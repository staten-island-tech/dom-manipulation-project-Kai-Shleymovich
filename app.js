const DOMSelectors = {
  form: document.getElementById('form'),
  input: document.getElementById('colors')
};
DOMSelectors.form.addEventListener('submit',function(e){
  e.preventDefault()
document.body.style.backgroundColor = DOMSelectors.input.value
});
/* function background() {
 if (input='red')
 document.body.style.backgroundColor = "red";
 if (input='green')
 document.body.style.backgroundColor = "green";
}
 */