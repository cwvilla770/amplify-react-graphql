import { API } from "aws-amplify";
import { createNote } from './graphql/mutations';
const newNote = await API.graphql({
  query: createNote,
  variables: {
      input: {
  "name": "Lorem ipsum dolor sit amet",
  "description": "Lorem ipsum dolor sit amet"
}
  }
});

import { API } from "aws-amplify";
import { updateNote } from './graphql/mutations';
const updatedNote = await API.graphql({
  query: updateNote,
  variables: {
      input: {
  "name": "Lorem ipsum dolor sit amet",
  "description": "Lorem ipsum dolor sit amet"
}
  }
});

import { API } from "aws-amplify";
import { deleteNote } from './graphql/mutations';
const deletedNote = await API.graphql({
  query: deleteNote,
  variables: {
      input: {
          id: "YOUR_RECORD_ID"
      }
  }
});

import { API } from "aws-amplify";
import { listNotes, getNote } from "./graphql/queries";
// List all items
const allNotes = await API.graphql({
  query: listNotes
});
console.log(allNote);
// Get a specific item
const oneNote = await API.graphql({
  query: getNote,
  variables: { id: 'YOUR_RECORD_ID' }
});