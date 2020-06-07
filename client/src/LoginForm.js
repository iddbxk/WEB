import React from 'react';


class LoginForm extends React.Component{
  render(){
    return(
      <div>
      <form name="login" action="/login/process_login" method="post">
        <input type="text" placeholder="ID" />
        <input type="password" placeholder="PW"/><br/>
        <button>로그인</button>
     </form>
   </div>
    );
  }
}

export default LoginForm;
