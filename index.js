'use strict'

const { dialogflow, Suggestions } = require('actions-on-google')
const functions = require('firebase-functions')

const app = dialogflow({ debug: true })

app.intent('Default Welcome Intent', conv => {
  conv.ask('Welcome to number echo! Say a number.')
})
app.intent('Stow My Boat - Phone Verification', (conv, { phoneNumber }) => {
  // extract the num parameter as a local string variable
  conv.close(`You said ${phoneNumber}`)
})
// app.intent('Default Fallback Intent', (conv) => {
//     conv.ask('Please repeat');
// });

// app.intent('WELCOME_INTENT', (conv) => {
//     conv.ask('Hi, what do you wanna talk about?');
//     conv.ask(new Suggestions(['fashion tips', 'celebrity news']));
// });

// app.fallback(conv => {
//   // intent contains the name of the intent
//   // you defined in the Intents area of Dialogflow
//   const intent = conv.intent
//   switch (intent) {
//     case WELCOME_INTENT:
//       conv.ask('Welcome! Say a number.')
//       break
//     case NUMBER_INTENT:
//       const num = conv.arguments.get(NUMBER_ARGUMENT)
//       conv.close(`You said ${num}`)
//       break
//   }
// })

// handlers for other intents...

const express = require('express')
const bodyParser = require('body-parser')
const server = express()
server.use(bodyParser.json())
server.post('/hook', app)
server.listen(process.env.PORT || 8000, () => console.log('Server listening on port 3000.'))
