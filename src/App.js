import './App.css';
import { useForm } from "react-hook-form";
import { useState } from 'react';

function App() {
  let[password,setpassword] = useState('')
  let[confirmPassword,setConfirmPassword] = useState('')
  
  const {register,formState:{errors},handleSubmit} = useForm();
  const onSubmit = uservalue =>{ 
    if(password === confirmPassword){
      console.log(uservalue)
    }
    else{
      alert("PASSWORD AND CONFIRM PASSWORD MUST BE EQUAL")
    }
  
  }

  function handlepassword(event){
    password=event.target.value;
    setpassword(password)
  }
  function handleconfirmpassword(event){
    confirmPassword=event.target.value;
    setConfirmPassword(confirmPassword)
  }

  return (
    <div className='enroll'>
      <h1>Enrollment</h1>
      <form onSubmit = {handleSubmit(onSubmit)} method = "post" >
      <span>FIRST NAME &nbsp;&nbsp;</span>  
      <input {...register('firstname',{required:true,minLength:3,maxLength:30})} />
      {errors.firstname?.type === 'required' && 'first name is required'}
      <br/><br/>
      
      <span>LAST NAME&nbsp;&nbsp;</span>  
      <input {...register('lastname',{minLength:3,maxLength:30})} />
      {errors.lastname?.type === 'minLength' && 'Last name have atleast 3 characters'}
      {errors.lastname?.type === 'maxLength' && 'Last name have maximum of 30 characters'}
      <br/><br/>
     
      <span>EMAIL&nbsp;&nbsp;</span>  
      <input {...register('email',{required:true,pattern:/\S+@\S+\.\S+/ })} />
      {errors.email?.type === 'required' && 'email is required'}
      {errors.email?.type === 'pattern' && 'email is not valid'}
      <br/><br/>

      <span>PASSWORD&nbsp;&nbsp;</span>  
      <input type = "password" {...register('password',{required:true,minLength:8,maxLength:20})} onChange = {handlepassword} />
      {errors.password?.type === 'required' && 'password is required'}
      {errors.password?.type === 'minLength' && 'password must be 8 characters'}<br/><br/>

      <span>CONFIRM PASSWORD&nbsp;&nbsp;</span>  
      <input type = "password" {...register('confirmPassword',{required:true,minLength:8,maxLength:20})} onChange = {handleconfirmpassword}/>
      {errors.password?.type === 'required' && 'password is required'}
      {errors.password?.type === 'minLength' && 'password must be atleast 8 characters'}<br/><br/>
      <input type = "submit" className = "submitbutton" value = "SUBMIT" {...register('submitbutton')}/>
    </form>
    </div>
    

  );
}

export default App;
