const tl = gsap.timeline({default: {ease : "power1.out"}})

function anim() {
tl.to('.second' , {y:"-100%", duration: 2 })
}



var list = document.getElementById("list")
var input = document.getElementById("text")

function foo(){
  var namval = document.getElementById('abcd').value
  var namsec = document.getElementById('xyz').value

firebase.database().ref('messages').on('child_added',function(data){
  let li = document.createElement('li')
  let lText = document.createTextNode(data.val().value)
  var name = document.createElement('font')
  var nameText = document.createTextNode( namval + " " + "and" + " " + namsec + ":" + " ")
  name.setAttribute('class','name')
  name.appendChild(nameText)
  li.appendChild(name)
  li.appendChild(lText)
  list.appendChild(li)
})
}
function chat(){
  if (input.value === "") {
  alert("Please Enter Some Message")
  
} else {
    var key = firebase.database().ref('messages').push().key;
    var Message = {
     value:input.value,
     key:key
    }
    firebase.database().ref('messages').child(key).set(Message)


    input.value = ""

  }
  
}

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("abc").click();
    }
  });
  
  function deleteAll(){
     list.innerHTML = ""
     firebase.database().ref('messages').remove()
  }
