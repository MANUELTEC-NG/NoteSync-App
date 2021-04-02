let getSavedNotes = () => {
    let notes = localStorage.getItem('notes');
   // console.log(notes)
   return notes? JSON.parse(notes):[];
    
}
const saveAllNotes = (notesArray) => {
    localStorage.setItem('notes', JSON.stringify(notesArray));
   
}

const removeANote = (id)=> {
    const noteIndex = notes.findIndex((note)=> {
        // return true if the id of the note in scope matches the passed in id
        return note.id === id;
    })
    if (noteIndex > -1) // a match was found and returned
    notes.splice(noteIndex, 1);
    return true;

}
const toggleNote = function(id) {
   const noteID = notes.find((note) => {
        return note.id == id;
    })
    if (!noteID) {
        // Todo
    }
}
// Generate DOM notes

const generateDOMElem =  (note) => {
    const noteDiv = document.createElement('div');
    const noteParaElemLink = document.createElement('a');
    const button = document.createElement('button');

    button.textContent = 'x';
    noteDiv.appendChild(button);
    button.addEventListener('click',  () => {
        removeANote(note.id);
        saveAllNotes(notes);
        renderedNotes(notes, filters);

    })

    
    noteParaElemLink.setAttribute('href', `/edit.html#${note.id}`);
    if (note.title.length > 0) {
        noteParaElemLink.textContent = note.title;
    } else {
        noteParaElemLink.textContent = 'unnamed note';
    }
    noteDiv.appendChild(noteParaElemLink)
    return noteDiv;
}
let sortNoteBy =  ( notesArray, sortCriteria) => {
    if ( sortCriteria === 'byLastEdit') {
        return notesArray.sort( ( firstNote, secondNote) => {
            if (firstNote.updatedOn > secondNote.updatedOn) {
                return -1;
            } else if ( firstNote.updatedOn < secondNote.updatedOn) {
                return 1;
            } else { 
                return 0; 
            }
        
        })
    } else if (sortCriteria === 'byName') {
       return notesArray.sort( function ( firstNote, secondNote) {
            if (firstNote.title > secondNote.title) {
                return -1;
            } else if (firstNote.title < secondNote.title) {
                return 1;
            } else {
                return 0;
            }
        })
    } else if ( sortCriteria === 'byAlphabetically') {
        return notesArray.sort( function (firstNote, secondNote){
           if ( firstNote.title.toLowerCase > secondNote.title.toLowerCase ){
               return 1;
           } else if (firstNote.title.toLowerCase < secondNote.title.toLowerCase) {
               return -1;
           } else {return 0;}
        })
    } else {
        return notesArray;
    }
}
// Render notes to the web page

const renderedNotes =  (notes, filters) => {
notes = sortNoteBy( notes, filters.sortNoteBy);
    
    // filters the array base on the  values typed in by the user
    const filteredNotes = notes.filter( (note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLocaleLowerCase());
    })
    // grabs the div and insert empty string to it content
    document.querySelector("#notes").innerHTML ="";
    // adding each filtered title to the paragraphs on the DOM 
    filteredNotes.forEach( (note) => {
        const noteDiv = document.querySelector('#notes');
        let noteElem = generateDOMElem(note);
       noteDiv.appendChild(noteElem);
    })
}

const gentimeStamp =  (timestamp)=> {
    return `Last edited on: ${moment(timestamp).fromNow()}`;
}

