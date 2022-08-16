import React from "react";

function CreateUser({seq, name, pw, email, onChange , proc , onUpdate}){
  return(
    <div>
      <input 
      name="seq"
      placeholder="seq"
      value={seq || ''}
      onChange={onChange}
      hidden
      />
      <input 
      name="name"
      placeholder="계정명"
      onChange={onChange}
      value={name}
      />
      <input 
      name="pw"
      placeholder="암호"
      onChange={onChange}
      value={pw}
      />
      <input 
      name="email"
      placeholder="이메일"
      onChange={onChange}
      value={email}
      />
      <button onClick={proc}>등록</button>
      <button onClick={onUpdate}>업데이트</button>
    </div>
  )
}

export default CreateUser;