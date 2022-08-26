/** Component: Hello */
/** props: passing data to components.
 *  Can have mutliple props.
 */
const Hello = (props) => {
  return ( 
    <div>
      <p> Hello {props.name}, you are {props.age} </p>
    </div>
  )
}

/** Component: App */
const App = () => {
  /** dynamic contenet inside component */
  const now = new Date()
  const a = 10
  const b = 20

  /** function returns the value of the expression */
  return (
    <div>
      <p> It is currently {now.toString()} </p>
      <Hello name = "Jamie" age = {19} />
      <Hello name = "Jerry" age = {17} />
      <p> {a} plus {b} is {a + b} </p>
    </div>
  )
}

export default App;
