 

class ViewTodo {
	constructor() {
		this.db = JSON.parse(localStorage.getItem('todos')) || [];
		this.elements = {	
		'button':document.getElementById('btn'),
		'input' :document.getElementById('input'),
		'li' :document.getElementById('template'),
		'ul' :document.getElementById('target'),
		

	}
		this.searchButton()
		this.setupEventListener()
		this.render()

}
	searchButton() {
	   	this.elements.button.addEventListener('click', (e) => {
	    // console.log(this.db);
	    e.preventDefault();
	    var found = this.findItemKey(this.elements.input.value)
	    if (found === undefined) {
	       var li = this.elements.li;
	       var li_clone = li.cloneNode(true);
	       li_clone.removeAttribute('id');
	       li_clone.classList.remove('d-none');
	       li_clone.classList.add('d-flex');
	       // NM add data-id to our new list
	       li_clone.setAttribute('data-id', this.elements.input.value); 
	        this.db.push({ title: this.elements.input.value, state: false })
	       li_clone.querySelector('.title').innerHTML = this.elements.input.value;
	       localStorage.setItem('todos', JSON.stringify(this.db));
	       	this.elements.ul.appendChild(li_clone);
	       	this.elements.input.value = ""
    	}

  	}); 

}

	setupEventListener() {
	   	document.addEventListener('click', (e) => {
	    if (e.target && e.target.classList.contains('btn-danger')) {
	       // set a variable to load the data-id if the button has been clicked
	       const itemToDelete = e.target.parentElement.getAttribute('data-id');
	       console.log('todelete', itemToDelete);
	       const loadLocStoItems = JSON.parse(localStorage.getItem('todos'));
	       console.log('ourlocalStorage', loadLocStoItems);
	       var values = Array.prototype.map.call(loadLocStoItems, (item, index) => {
	    if (item.title === itemToDelete) {
           console.log('this is the product to delete', item.title);
           console.log('with index', index);
           // load the localstorage to that item
           console.log(loadLocStoItems[index]);
           // you can access all the params inside the LS
           console.log(loadLocStoItems[index].title);
           // we remove the item of the downloaded LocalStorage
           loadLocStoItems.splice(index, 1);
           console.log('reworked Array', loadLocStoItems);
           // update the localStorage withe the reworked Array
           localStorage.setItem('todos', JSON.stringify(loadLocStoItems));
	   		}
		});
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


