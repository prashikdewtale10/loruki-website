// console.dir(document.body)   to get all elements of page /
// console.log("prashik")

// // document.alert("golu")

// // Traversing the dom
// var itemlist=document.querySelector('#items')

// parent node
// console.log(itemlist.parentNode)
// itemlist.parentNode.style.backgroundColor="teal"
// console.log(itemlist.parentNode.parentNode)

//parent element

// console.log(itemlist.parentElement)
// itemlist.parentNode.style.backgroundColor="teal"
// console.log(itemlist.parentNode.parentNode)

//child nodes

// console.log(itemlist.childNodes)

// children item that cildnodes
 
// console.log(itemlist.children)
// console.log(itemlist.children[1])
// itemlist.children[1].style.backgroundColor="pink"

// //First Child
// console.log(itemlist.firstChild);

// //first element child
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.style.backgroundColor="lightblue"

// // Creating the node 

// //create a div
// var newDiv = document.createElement('div');

// //adding class 
// newDiv.className="helloClass";

// //adding id

// newDiv.id="helloId";

// //adding attr
// newDiv.setAttribute("title","this is an attribute")

// //creating the text context
// var newText=document.createTextNode("Hello world");

// newDiv.appendChild(newText)

// //adding the newly created element to dom

// var container = document.querySelector('header .container')
// var h1=document.querySelector('header h1')

// container.insertBefore(newDiv,h1)

// console.log(newDiv)
// document.i
//============================= ADVANCED DOM ============================
 // adding eventlistener

//  var button=document.getElementById('button').addEventListener(
//      'click', function(){
//          console.log("Event Listener run successfully");
//          var button1=document.getElementById('button');
//          button1.style.backgroundColor="green";
//          button1.textContent="You clicked !"
//      }
//  );

// getting all event list

// var button=document.getElementById('button').addEventListener(
//     'click',button_func
// );

// function button_func(e){
//     // console.log(e);

//     // console.log(e.target);
//    // console.log(e.target.id);
//     //console.log(e.target.className);
//     //console.log(e.target.classList);

//     // console.log(e.type) gives the type of the event happened.

//     //console.log(e.clientX);      get the mouse touch value on x axis
//     //console.log(e.clientY); 

//     //button

// }

// var button =document.getElementById('button');
// var box =document.getElementById('box');
//button.addEventListener('click',runEvent);
//button.addEventListener('dblclick',runEvent);
//button.addEventListener('mouseup',runEvent);
// box.addEventListener('mouseenter',runEvent);
// box.addEventListener('mouseleave',runEvent);
// box.addEventListener('mouseover',runEvent);
// box.addEventListener('mouseout',runEvent);
// box.addEventListener('mousemove',runEvent);
// var output=document.getElementById('output')

// var itemInput=document.querySelector('input[type="password"]');
// var form=document.querySelector('form')
// itemInput.addEventListener('keyup',runEvent)


// function runEvent(e){
//     console.log('EVENT TYPE:'+e.type);
//     console.log('EVENT TYPE:'+e.target.value);
//     // output.innerHTML='<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>';
//     // box.style.backgroundColor='rgb('+e.offsetX+','+e.offsetY+',20)';
    
// }

var form = document.getElementById('addform');
var itemList =document.getElementById('items');
var search =document.getElementById('filter');
//form submit event
form.addEventListener('submit',addItem);
 // Deltete event
 itemList.addEventListener('click',removeItem);
// filter event
search.addEventListener('keyup',filterItem);


// add item function
function addItem(e){
    e.preventDefault();

    //get input value
    var newItem=document.getElementById('item').value;
    console.log(newItem);
    var li=document.createElement('li');

    // adding class
    li.className='list-group-item';
    //appending text node
    li.appendChild(document.createTextNode(newItem));

     //create delete button
     var delbtn= document.createElement('button');

     // adding class to btn
     delbtn.className="btn btn-danger btn-sm float-right delete";

     // adding textnode to delte button
     delbtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(delbtn);



    // appending new item to list
    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
    if(confirm("Are you want to Delete")){
        var li=e.target.parentElement;
        itemList.removeChild(li);
    }

    }
}
function filterItem(e){
     //convert to lowercase
     var text=e.target.value.toLowerCase();
   //GET LIST
   var items=itemList.getElementsByTagName('li');

   // to convert HTML Collection to Array
   Array.from(items).forEach(function(item){
       var itemName=item.firstChild.textContent;
       if(itemName.toLowerCase().indexOf(text) != -1){
           item.style.display='block';
        //    item.style.backgroundColor="grey";

       }else{
        item.style.display='none';
       }
   })


    }