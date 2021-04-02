let notes = getSavedNotes();
   

const filters = {
    searchText: '',
    sortNoteBy: 'byLastEdit'
}

document.querySelector("#create-note").addEventListener("click", function(event) {
    
    // when  the creae button is clicked i want to grab what is type  in and
    // save in local storage
    const id = uuidv4();
    const noteTimeStamp = moment().valueOf();
    notes.push(
        {
         id: id,
         title: '', 
         body: '',
         createdOn: noteTimeStamp,
         updatedOn:noteTimeStamp
        });
    //localStorage.setItem('notes', JSON.stringify(notes));
    saveAllNotes(notes);
    renderedNotes(notes, filters);
    location.assign(`/edit.html#${id}`)

})


document.querySelector('#search-text').addEventListener('input', function(event){
    filters.searchText = event.target.value;
    renderedNotes(notes, filters);
    
})

document.querySelector('#select-note').addEventListener('change', function (event) {
    filters.sortNoteBy = event.target.value;
    renderedNotes(notes, filters);
});

window.addEventListener('storage', function (event){
    if (event.key === 'notes') {

    notes = JSON.parse(event.newValue);
    }
    renderedNotes(notes, filters);
})

