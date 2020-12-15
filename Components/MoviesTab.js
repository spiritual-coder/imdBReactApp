class Accordion extends React.Component {
  constructor() {
    super();
    this._handleClick = this._handleClick.bind(this);
  }
  
  componentDidMount() {
    this._handleClick();
  }
  
  _handleClick() {
    const acc = this._acc.children;
    for (let i = 0; i < acc.length; i++) {
      let a = acc[i];
      a.onclick = () => a.classList.toggle("active");
    }
  }
  
  render() {
    return (
      <div 
        ref={a => this._acc = a} 
        onClick={this._handleClick}>
        {this.props.children}
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Accordion>
          <div className="accor">
            <div className="head">Head 1</div>
            <div className="body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
          <div className="accor">
            <div className="head">Head 2</div>
            <div className="body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </Accordion>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


CSS:

@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700,900)

*
  font-family: 'Roboto'
  box-sizing: border-box

html,
body
  width: 100%
  height: 100%
  margin: 0px
  padding: 0px

html
  border: 15px solid #000
  
h1 
  margin: 0px
  padding: 10px
  color: #333
  font-size: 26px
  background: #ddd
  border-bottom: 1px solid #ccc
  
.accor
  margin: 10px
  border: 1px solid #ddd
  transition: 0.4s
  
  .head
    background: #eee
    padding: 10px 20px
    cursor: pointer
  
  .body
    background: #fafafa
    padding: 0 20px
    max-height: 0
    overflow: hidden
    transition: 200ms ease-in-out
     
  &.active > .body
    padding: 10px 20px
    max-height: 600px


    Color:

    Dark Gray: #18191a

    Light Gray: #3a3b3c
  