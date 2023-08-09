// Don't remove this lines
console.stdlog = console.log.bind(console);
console.logs = [];
console.log = function() {
  console.logs.push(Array.from(arguments).join(" "));
   console.stdlog.apply(console, arguments);
}

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Your code here
// remove the last string of the array secretMessage.
secretMessage.pop();
//
console.log(secretMessage.length);
//
secretMessage.push('to', 'Program');
//
secretMessage[6] = 'right';
//
secretMessage.shift();
secretMessage.unshift('Programming');
secretMessage.splice(3, 6, 'know,');
console.log(secretMessage.join(' '));

// Don't remove this line 
module.exports = { secretMessage }
