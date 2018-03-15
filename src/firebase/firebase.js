import * as firebase from 'firebase'
import { setTimeout } from 'timers';

var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database()

export { firebase, database as default }

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })

//     console.log(expenses)
//   })
// let expenses;
// database.ref('expenses').on('value', (snapshot) => {
//   expenses = []
  
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })

//   console.log(expenses)
// })

// database.ref('expenses').push({
//   description: 'Food',
//   amount: 986,
//   note: '',
//   createdAt: -153000000
// })

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native Anguar Python'
// })

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// setTimeout(() => {
//   database.ref().update({
//     name: 'Stranger',
//     job: {
//       title: 'Guard',
//       company: 'Hell'
//     }
//   })
// }, 5000)

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e)
//   })

// database.ref().set({
//   name: 'My Name',
//   stressLevel: 8,
//   age: 29,
//   job: {
//     title: 'loser',
//     company: 'bad'
//   },
//   location: {
//     city: 'Togliatty',
//     country: 'Russian Federation'
//   }
// }).then(() => {
//   console.log('Data is saved')
// }).catch((e) => {
//   console.log('This failed', e)
// })

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// })

// database.ref().remove()
//   .then(() => {
//     console.log('data removed')
//   })
//   .catch((e) => {
//     console.log('Some error: ', e)
//   })