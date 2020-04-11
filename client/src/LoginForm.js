import React from 'react';

function LoginForm() {
  return (
   <div>
     <form name="login" action="/login/process_login" method="post">
       <input type="text" placeholder="ID" />
       <input type="password" placeholder="PW"/>
       <button>로그인</button>
    </form>

      <form action="/login/signUp">
        <input type="submit" value="signUp" float="left" width="50%"></input>
      </form>
   </div>
  );
}

export default LoginForm;
