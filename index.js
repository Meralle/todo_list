

class ViewTodo {
	constructor() {
		this.elements = {
		'button':document.getElementById('btn'),
		'input' :document.getElementById('input'),
		'li' :document.getElementById('template'),
		'ul' :document.getElementById('target')

	}
		this.searchButton()
		this.setupEventListener()

}


searchButton(){
	this.elements.button.addEventListener('click', (e) => {
		e.preventDefault();
		var li = this.elements.li;
		var li_clone = li.cloneNode(true);
		li_clone.removeAttribute('id');
	    li_clone.classList.remove('d-none');
	    li_clone.classList.add('d-flex');
	    li_clone.querySelector('.title').innerHTML = this.elements.input.value;
	    this.elements.ul.appendChild(li_clone);

		})

	}

setupEventListener(){
	 document.addEventListener('click', (e)=>{
	 	console.log(e.target)
      if(e.target && e.target.classList.contains( 'btn-danger' )){
       e.target.parentElement.remove();
      }
      
    })

}





	
}
	var todo = new ViewTodo();



