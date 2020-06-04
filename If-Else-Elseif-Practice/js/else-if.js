let weather;
weather = prompt('What kind of weather do we have today? Sun, Rain, or Snow?').toLowerCase();

if ( weather === 'sun' ) {
  console.log('It\'s sunny, so I\'m going swimming.');
} else if ( weather === 'rain' ) {
  console.log('It\'s rainy, so I\'ll just stay inside and read a book...');
} else if ( weather === 'snow' ) {
  console.log('It\'s Snowy, so perhaps it\'s a good time to go skiing?');
} else {
  console.log('I\'ve got no idea what I\'m going to do today... :(');
};