switch (ReactDOM.querySelector("#appDiv")) {
| Some(appDiv) => ReactDOM.render(
  React.string("Hello World"),
  appDiv
)
| None => Js.log("No appDiv found")
}