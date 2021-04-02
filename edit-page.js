
const titleElem = document.querySelector('#note-title');
const bodyElem = document.querySelector('#note-body');
const timeStampElem = document.querySelector('#time-stamp');
const removeBtn = document.querySelector('#remove-button')
const noteIdentifier = location.hash.substring(1);


let notes = getSavedNotes();

let note = notes.find((note)=> {
    return note.id === noteIdentifier;
})
    
    if (!note) {
        location.assign('/index.html');
    }


    titleElem.value = note.title;
    bodyElem.value = note.body;
    timeStampElem.textContent = gentimeStamp(note.updatedOn);


titleElem.addEventListener('input', (event) => {
    note.title = event.target.value;
    note.updatedOn = moment().valeuOf();
    timeStampElem.textContent = gentimeStamp(note.updatedOn);

    saveAllNotes(notes);
});

bodyElem.addEventListener('change', (event)=> {
note.body = event.target.value;
note.updatedOn = moment().valueOf();
timeStampElem.textContent = gentimeStamp(note.updatedOn);

saveAllNotes(notes);
});

removeBtn.addEventListener('click', () => {
    removeANote(note.id);
    saveAllNotes(notes);
    location.assign('/index.html');
})

window.addEventListener('storage',  (event) => {
    
    if (event.key === 'notes'){
        // parses the new value and re-assign to notes array
       notes = JSON.parse(event.newValue);
       note = notes.find((note) => {
        return note.id === noteIdentifier;
       })

       if (!note){
           location.assign('/index.html');
       }

       titleElem.value = note.title;
       bodyElem.vale = note.body;
        timeStampElem.textContent = gentimeStamp(note.updatedOn);

    }
})