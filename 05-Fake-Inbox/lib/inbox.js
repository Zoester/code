
//create probability function
const hasNewMessage = () => {
  // TODO: return true with a probability of 20%.
  if (Math.random()<=0.2) {
    return true
  }else{
    return false
  }
}
//create hasNewMessage function

const newMessage = () => {
  // TODO: return a random message as an object with two keys, subject and sender
  const subject = ['Congratulations', 'Google Alert', 'Markets', 'myFT', 'Thank you', 'Welcome'];
  const sender = ['Financial Times', 'McKinsey','Eventbrite', 'Agnes', 'Sarah', 'LinkedIn'];
  const randomSubject = subject[Math.floor (Math.random()*subject.length)];
  const randomSender = sender[Math.floor (Math.random()*sender.length)];

  return {
    subject: (randomSubject),
    sender: (randomSender)
    }
};

var message = newMessage()
const appendMessageToDom = (message) => {
  // TODO: append the given message to the DOM (as a new row of `#inbox`)
  const Email=document.querySelector('#inbox');
  Email.insertAdjacentHTML("beforebegin",
      `<div class="container" id="inbox">
      <div class="row message unread">
        <div class="col-3">${message.sender}</div>
        <div class="col-9">${message.subject}</div>
      </div>`);
};

const refresh = () => {
  // TODO: Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.
  let counter = document.querySelector('#count')
  if (hasNewMessage()) {
    counterInt = parseInt(counter.innerText[1])
    counterInt += 1
    counter.innerText = `(${counterInt})`
    appendMessageToDom(newMessage())
  }

};




/*
 subject.sample
  sender.sample
  console.log(subject.sample())
*/











// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});

