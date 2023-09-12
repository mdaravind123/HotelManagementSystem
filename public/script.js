const email=document.getElementById("email");
const password=document.getElementById("password");
const showpassword=document.getElementById("showpassword");
const usertype=document.getElementById("usertype");
const login=document.getElementById("login");
const reset=document.getElementById("reset");
const signup=document.getElementById("signup");

login.addEventListener("click",function(e){
  e.preventDefault();
  if(email.value==="" ||password.value===""||usertype.value===""){
    alert("Enter all Neccessary feilds");
  }else if(usertype.value=="Admin"){
    window.location.href="./admin.html";
  }else if(usertype.value=="Guest"){
    window.location.href="guest.html";
  }else if(usertype.value=="Employees"){
    window.location.href="employee.html";
  }
});


function check(){
  if(showpassword.checked===true){
    password.type="text";
  }else{
    password.type="password";
  }
}

reset.addEventListener("click",function(){
  email.value="";
  password.value="";
  usertype.value="";
})

signup.addEventListener("click",function(){
  console.log("hello");
  window.location.href="./signup.html";
})
/*
document.addEventListener('DOMConentLoaded',function(){
  const loginform=document.getElementById('authenticate');
  const loginerror=document.getElementById("loginerror");
  loginform.addEventListener('submit',function(e){
    e.preventDefault();
    fetch('/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({email,password,usertype})
    })
    .then(response=>response.json())
    .then(data=>{
      if(data.success){
        window.location.href="./admin.html";
      }else{
        loginerror.textcontent='Login failed. Please check your credentials.';
      }
    })
    .catch(error=>{
      console.error('Error:',error);
      loginerror.textcontent='An error occured during login. Please try again later.'
    })
  })
})
*/