import React, {useReducer} from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers/index';
import { applyNumber, changeOperation, clearDisplay } from './actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleOperation = e => {
    dispatch(changeOperation(e.target.innerText));
  }

  const handleNumbers = e => {
    dispatch(applyNumber(e.target.innerText))
  }

  const handleClear = () => {
    dispatch(clearDisplay())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleNumbers}/>
              <CalcButton value={2} onClick={handleNumbers}/>
              <CalcButton value={3} onClick={handleNumbers}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleNumbers}/>
              <CalcButton value={5} onClick={handleNumbers}/>
              <CalcButton value={6} onClick={handleNumbers}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleNumbers}/>
              <CalcButton value={8} onClick={handleNumbers}/>
              <CalcButton value={9} onClick={handleNumbers}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleOperation}/>
              <CalcButton value={"*"} onClick={handleOperation}/>
              <CalcButton value={"-"} onClick={handleOperation}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClear}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
