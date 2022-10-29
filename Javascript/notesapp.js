console.log('This is the first project of JS');
shownotes();
// If user adds a note then add it to the Local Storage.

let addnotebtn = document.getElementById('addnotebtn');
addnotebtn.addEventListener('click' , function(e){
    let addtext = document.getElementById('addtxt');
    let addtitle = document.getElementById('addtitle');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
      title : addtitle.value,
      text : addtext.value
    }
    notesObj.push(myObj);
    localStorage.setItem('notes' , JSON.stringify(notesObj));
    addtext.value = "";
    addtitle.value = "";
    console.log(notesObj);
    shownotes();
});

// Function to show elements from localStorage

function shownotes(){
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element , index) {
    html += `
    <div id="notes">
    <div class="max-w-sm rounded overflow-hidden shadow-lg my-4 mx-2">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">${element.title}</div>
        <p>${element.text}</p>
        <button id="${index}" onclick="deleteNote(this.id)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
          Delete Note
        </button>
      </div>
    </div>
  </div>
             `;

  });
  let notesElm = document.getElementById("notes");
  //console.log(notesElm)
  if(notesObj.length != 0){
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    notesElm.setAttribute('style' , 'padding: 30px')
  }
};


// Function to delete a note

function deleteNote(index){
  console.log('i am deleting' , index)

  let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem('notes' , JSON.stringify(notesObj));
    shownotes();
}