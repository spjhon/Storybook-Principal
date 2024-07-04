
/** A common practice is to write a single event handler for each component, which can 
trigger different actions according to the event type. 

```jsx
const Button = () => {
    const handleEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
      switch (event.type) {
        case 'click':
          console.log('clicked')
          break
  
        case 'dblclick':
          console.log('double clicked')
          break
  
        default:
          console.log('unhandled', event.type)
      }
    }
  
    return (
      <button onClick={handleEvent} onDoubleClick={handleEvent}>
        Click me!
      </button>
    )
  }
  
  export default Button
```




*/
const Button = () => {
    const handleEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
      switch (event.type) {
        case 'click':
          console.log('clicked')
          break
  
        case 'dblclick':
          console.log('double clicked')
          break
  
        default:
          console.log('unhandled', event.type)
      }
    }
  
    return (
      <button onClick={handleEvent} onDoubleClick={handleEvent}>
        Click me!
      </button>
    )
  }
  
  export default Button