import React from 'react';

function User({ solo , onRemove, onModify}){
  return(
      <tbody>
          <tr>
              <td>
                  <span>{solo.seq}</span>
              </td>
              <td>
                  <span>{solo.name}</span>
              </td>
              <td>
                  <span>{solo.pw}</span>
              </td>
              <td>
                  <span>{solo.email}</span>
              </td>
              <td>
                  <span>{solo.date}</span>
              </td>
              <td>
                  <button onClick={() => onModify(solo)}>수정</button>
              </td>
              <td>
                  <button onClick={() => onRemove(solo.seq)}>삭제</button>
              </td>
          </tr>
      </tbody>
  )
}

function UserList({list, onRemove, onModify}){
  return(
    <table className="UserTable">
        <thead>
            <tr>
                <th scope="col">번호</th>
                <th scope="col">이름</th>
                <th scope="col">암호</th>
                <th scope="col">이메일</th>
                <th scope="col">시간</th>
                <th scope="col">수정</th>
                <th scope="col">삭제</th>
            </tr>
        </thead>
        {list.map((solo, index) => ( <User solo={solo} key={index} onRemove={ onRemove } onModify={ onModify }/>))}
    </table>
  )
}

export default UserList;