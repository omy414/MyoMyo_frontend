import logo from './assets/images/logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [list, setList] = useState([]);
  console.log(list);

    useEffect(() => {
        fetch("/hello")
            .then((response) => {
                return response.json();
            })
            .then(function (data) {
                setList(data.list);
            });
    }, []);

    function check(){
        console.log("ㄹㄹㄹ");
        console.log(list);
        list[0].name = "아르";
    }

    function List({ solo }){
        return(
            <ul>
                <li>{solo.name}</li>
                <li>{solo.pw}</li>
                <li>{solo.email}</li>
            </ul>
        )
    }

    return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <p>
                  Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  Learn React
              </a>
              <>
              {/* {list.map((solo, index) => <li key={`${index}-${solo.name}`}>{solo.name}</li>)} */}
                {list.map((solo, index) => ( <List solo={solo} key={index-solo.id}/>))}
              </>
              <button onClick={() => check()}>
                눌러봐
              </button>
          </header>
      </div>
  );
}

export default App;
