

class ViewTodo {
	constructor() {
		this.db = JSON.parse(localStorage.getItem('todos')) || [];
		this.elements = {	
		'button':document.getElementById('btn'),
		'input' :document.getElementById('input'),
		'li' :document.getElementById('template'),
		'ul' :document.getElementById('target')

	}
		this.searchButton()
		this.setupEventListener()
		this.render()

}

	searchButton(){
		this.elements.button.addEventListener('click', (e) => {
			console.log(this.db);
			e.preventDefault();
		    var found = this.findItemKey(this.elements.input.value)
		    if(found === undefined) {
			var li = this.elements.li;
			var li_clone = li.cloneNode(true);
			li_clone.removeAttribute('id');
		    li_clone.classList.remove('d-none');
		    li_clone.classList.add('d-flex');

		    
		    this.db.push({title:this.elements.input.value, state: false})
		    li_clone.querySelector('.title').innerHTML = this.elements.input.value;
		    localStorage.setItem('todos', JSON.stringify(this.db));
		    this.elements.ul.appendChild(li_clone);

		} 
		   
	});

}

	setupEventListener(){
		 document.addEventListener('click', (e)=>{
		 	// console.log(e)
	      if(e.target && e.target.classList.contains( 'btn-danger' )){
	      	// console.log(e)
	      	// this.db.removeItem({})
	      	console.dir(e.target.parentElement.innerText);
	       e.target.parentElement.remove();


	    }
	      
	});

}

	findItemKey(itemName) {
		for(var i=0; i< this.db.length; i++){
			if(this.db[i].title === itemName){
				return i;
			}
		}
	}
	
	render(){
		for(var i=0; i< this.db.length; i++){

			var li = this.elements.li;
			var li_clone = li.cloneNode(true);
			li_clone.removeAttribute('id');
		   
		    li_clone.classList.add('d-flex');
		    
	    	li_clone.querySelector('.title').innerHTML = this.db[i].title;
	   
	    	this.elements.ul.appendChild(li_clone);
}
 

	}


}
		var todo = new ViewTodo();



