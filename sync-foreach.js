const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

const syncforeach = (arr, fn) => {
  if (toString.call(fn) !== '[object Function]') {
    throw new TypeError('Iterator must be a function')
  }

  let keys = Object.keys(arr)
  let done

  const next = option => {
    let index = keys.shift()

    if (!isNaN(index)) {
      index = +index
    }

    switch (option) {
      case 'break':
      case 'done':
        arr[index] = undefined
        break
    }

    if (arr[index] !== undefined) {
      fn(next, arr[index], index, arr)
    } else if (done !== undefined) {
      done()
    }
  };

  setTimeout(() => next(), 1)

  return {
    done(cb) {
      done = cb
    }
  }
}

if (isBrowser) {
  window.syncforeach = syncforeach
} else {
  module.exports = syncforeach
}
