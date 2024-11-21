import React, {useContext,useRef} from 'react'
import Title from '../component/headers/Title'
import Form from '../component/forms/Forms'
import Input from '../component/forms/Input'
import SubmitButton from '../component/buttons/SubmitButton'
import { authContext } from '../component/context/AuthContext'
export default function Login () {
  const email= useRef();
  const password = useRef();
  const {setUser}=useContext(authContext)
  const login = (event) => {
    event.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
    setUser({
      logged:true, 
      data:{ email:email.current.value, 
        password:password.current.value}
    })
  };
  return (
    <div>
        <Title>INgrese su datos</Title>
        <Form onSubmit={login}>
            <Input ref={email} placeholder="Email" type="email"></Input>
            <Input ref={password} placeholder="Password" type="password"></Input>
            <SubmitButton> Login </SubmitButton>
        </Form>
    </div>
  );
}

