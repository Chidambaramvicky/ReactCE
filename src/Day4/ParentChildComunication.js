 function Parent() {
  return (
    <div>
      <h1>Parent Component</h1>
      <Child re={1000}></Child>
    </div>
  )
}
 function Child(props) {
  return (
    <div>
      <h1>Child Component</h1>
      <h1>The value is {props.re}</h1>
    </div>
  )
}
export default Parent;