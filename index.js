

class ViewTodo {
	constructor() {
		this.elements = {
		'button':document.getElementById('btn'),
		'input' :document.getElementById('input'),
		'li' :document.getElementById('template'),
		'ul' :document.getElementById('target')

	}
		this.searchButton()

}


searchButton(){
	this.elements.button.addEventListener('click', (e) => {
		e.preventDefault();
		var li = this.elements.li;
		var li_clone = li.cloneNode(true);
		li_clone.removeAttribute('id');
	    li_clone.classList.remove('d-none');
	    li_clone.innerHTML = this.elements.input.value;
	    this.elements.ul.appendChild(li_clone);

		})

	}
	
}
	var instaceeOfCart = new ViewTodo();

