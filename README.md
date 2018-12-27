
# Sync Foreach - Beta

## Simple to use

Sometimes we need to run some async task inside of our loops. Sync-foreach allow us to do this
in a easy way

## Quick Start

### syncforeach(element, function, [context])

```js
const syncforeach = require('sync-foreach')
```

### Array
```js
syncforeach(['foo', 'bar'], (next, value, index, array) => {
    // Next: Get the next item
    // Value: foo, bar
    // Index: 0, 1
    // Array: ['foo', 'bar']

    // Do some async function, task, etc...
    asyncFunction(() => {
        // And next
        next()
    })
}).done(() => {
    console.log('completed')
})
```

### Object
```js
syncforeach({foo: 1, bar: 2}, (next, value, key, object) => {
    // Next: Get the next item
    // Value: 1, 2
    // Key: foo, bar
    // Object: ['foo', 'bar']
    
    // Do some async function, task, etc...
    asyncFunction(() => {
        // And next
        next()
    })
}).done(() => {
    console.log('completed')
})
```