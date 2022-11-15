function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function fetchData() {

  const apiUrl = "https://yesno.wtf/api"
  const options = {
    method: 'GET'
  }

  const res = await fetch(apiUrl, options)
  const record = await res.json();

  const negativeResponses = [
    "No, put your credit card down!",
    "Absolutely not.",
    "That's a bad idea. Really bad.",
    "Don't do it.",
    "You already know it's a no.",
    "No. And don't even think about putting it on Klarna",
    "Why would the idea even cross your mind?",
    "No, don't buy it. You'll only regret it later.",
    "No, but you should sleep on it...",
    "Of course not! What would [insert significant other's name here] say?",
    "No!",
    "No, no, no, no and - let me just check - no!"
  ]

  const positiveResponses = [
    "Go for it!",
    "Yes, absolutely. You've earned it.",
    "100% yes",
    "Yes! Best. Idea. Ever.",
    "Go on, stick it on your Mastercard!",
    "Yeah, why the hell not?",
    "You work hard for your money - treat yourself!",
    "Ignore the haters, buy it.",
    "If you want it, you go get it!",
    "Absolutely yes!",
    "Yes, yes, yes!",
    "Do it. Do it quick before you change your mind"
  ]

  let response;

  const index = randomInteger(1, 12)

  if (record.answer === 'yes') {

    response = positiveResponses[index]

  } else {

    response = negativeResponses[index]

  }

  document.getElementById("answer").innerHTML = response
  document.getElementById("image").src = record.image

}

fetchData();