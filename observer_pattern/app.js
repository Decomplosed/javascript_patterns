function EventObserver() {
  this.observers = []
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn)
    console.log(`You are now subscribed to ${fn.name}`)
  },
  unsubscribe: function(fn) {
    this.observers = this.observers.filter((item) => {
      if(item !== fn) {
        return item
      }
    })
    console.log(`You are now unsubscribed from ${fn.name}`);
  },
  fire: function() {
    this.observers.forEach((item) => {
      item.call()
    })
  }
}

const click = new EventObserver()


// Event Listeners

document.querySelector('.sub-ms').addEventListener('click', () => {
  click.subscribe(getCurrMilliseconds)
})

document.querySelector('.unsub-ms').addEventListener('click', () => {
  click.unsubscribe(getCurrMilliseconds)
})

document.querySelector('.sub-s').addEventListener('click', () => {
  click.subscribe(getCurrSeconds)
})

document.querySelector('.unsub-s').addEventListener('click', () => {
  click.unsubscribe(getCurrSeconds)
})

document.querySelector('.fire').addEventListener('click', () => {
  click.fire()
})

// Click Handler

const getCurrMilliseconds = () => {
  console.log(`Current milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurrSeconds = () => {
  console.log(`Current seconds: ${new Date().getSeconds()}`);
}