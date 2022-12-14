import React from "react";
import logo from '../../assets/images/logo.svg';
import {useEffect, useState} from "react";
import { defaultInstance } from "../../apis/customAxios"; 
import CreateUser from "./CreateUser";
import UserList from "./UserList";

const Home = () => {
    const [list, setList] = useState([]);

    const [input, setInput] = useState({
        seq: '',
        name: '',
        email: '',
        pw: ''
      }) 
    
    const {seq , name, email, pw} = input;

    useEffect(() => {
        getList();

        // fetch("/hello")
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then(function (data) {
        //         setList(data.list);
        //     });
    }, []);

    function getList(){
        defaultInstance.post('/main/list', {
          
        }).then(data => {
          console.log(data);
            console.log(data.data.result.list);
            setList(data.data.result.list);
        })
    }

    const onChange =(e)=>{
        const {name, value} = e.target;
        setInput({
          ...input,
          [name]:value
        })
      }

    function proc(){
        console.log("등록!!");
        defaultInstance.post('/main/insert', {
            name: name
            ,pw : pw
            ,email: email
        }).then(data => {
            setInput({
                name: ''
                ,pw :''
                ,email: ''
              })
            console.log(data);
            getList();
        })
    }

    const onUpdate = () => {
        defaultInstance.post('/main/update', {
            seq : seq
            ,name : name
            ,pw : pw
            ,email: email
        }).then(data => {
            setInput({
                seq : ''
                ,name: ''
                ,pw :''
                ,email: ''
              })
            console.log(data);
            getList();
        })
      }

    const onModify = (user) => {
        console.log(user);
        setInput({
          seq: user.seq
          ,name: user.name
          ,pw: user.pw
          ,email: user.email
        })
      }

    function onRemove(seq){
        console.log("삭제!!");
        console.log(seq);
        defaultInstance.post('/main/delete', {
            seq: seq
        }).then(data => {
            
            console.log(data);
            getList();
        })
    }

    return(
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
              <>
              {/* {list.map((solo, index) => <li key={`${index}-${solo.name}`}>{solo.name}</li>)} */}
                <UserList list={ list } onRemove={ onRemove } onModify={ onModify }></UserList>
                <CreateUser seq={seq} name={name} pw={pw} email={email} proc={proc} onChange={onChange} onUpdate={ onUpdate }/>
              </>
          </header>
      </div>
    )
}

export default Home;