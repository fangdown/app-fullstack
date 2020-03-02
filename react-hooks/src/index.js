import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import State from './useState'
import UseEffect from './useEffect'
import LifeCycle from './lifeCycle'
import UseRef from './useRef'
import UseContext from './useContext'
import MisOrder from './misOrder'
import LayoutEffect from './layoutEffect'
import UseCallback from './useCallback'
import UseMemo from './useMemo'
import UseReducer from './useReducer'
import Chain from './chain'
import Hoc from './hoc'
import UseUser from './useUser'
import Animation from './animation'
import './index.less'

const App = function () {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100%' }}>
        <ul className="nav" style={{ width: '200px', borderRight: '1px solid #eee', listStyle: 'none' }}>
          <li><Link to="/">1-basic</Link></li>
          <li><Link to="/useState">01-useState</Link></li>
          <li><Link to="/useEffect">02-useEffect</Link></li>
          <li><Link to="/lifeCycle">03-lifeCycle</Link></li>
          <li><Link to="/useRef">04-useRef</Link></li>
          <li><Link to="/useContext">05-useContext</Link></li>
          <li><Link to="/misOrder">06-misOrder</Link></li>
          <li><Link to="/layoutEffect">07-layoutEffect</Link></li>
          <li><Link to="/useCallback">08-useCallback</Link></li>
          <li><Link to="/useMemo">09-useMemo</Link></li>
          <li><Link to="/useReducer">09-useReducer</Link></li>
          <li><Link to="/chain">10-chain</Link></li>
          <li><Link to="/hoc">11-hoc</Link></li>
          <li><Link to="/useUser">12-useUser</Link></li>
          <li><Link to="/animation">13-animation</Link></li>
        </ul>
        <div style={{ flex: 1 }}>
          <Route exact path="/" component={Home} />
          <Route path="/useState" component={State} />
          <Route path="/useEffect" component={UseEffect} />
          <Route path="/lifeCycle" component={LifeCycle} />
          <Route path="/useRef" component={UseRef} />
          <Route path="/useContext" component={UseContext} />
          <Route path="/misOrder" component={MisOrder} />
          <Route path="/layoutEffect" component={LayoutEffect} />
          <Route path="/useCallback" component={UseCallback} />
          <Route path="/useMemo" component={UseMemo} />
          <Route path="/useReducer" component={UseReducer} />
          <Route path="/chain" component={Chain} />
          <Route path="/hoc" component={Hoc} />
          <Route path="/useUser" component={UseUser} />
          <Route path="/animation" component={Animation} />
        </div>
      </div>
    </Router>
  )
}
const Home = function () {
  return (
    <div>111</div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))