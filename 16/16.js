function formvalidation(){
    var f_name=document.myform.fname;
    var m_name=document.myform.mname;
    var l_name=document.myform.lname;
    var m_email=document.myform.email;
    var p_phone=document.myform.phone;
    if(check_name(f_name,m_name,l_name)){
        if(check_email(m_email)){
            if (check_phone(p_phone)){

            }

        }
    }
    else{
        return false;
    }

}
function check_name(fname,mname,lname){
    var letters=/^[A-Za-z]+$/;
    if (fname.value.match(letters) && mname.value.match(letters) && lname.value.match(letters)){
        return true;
    }
    
    else{
        alert("name should only consist of alphabets");
        fname.focus();
        return false;
    }
}
function check_email(email){
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
email.focus();
return false;
}
}
function check_phone(phone){
var phoneno = /^\d{10}$/;
if(phone.value.match(phoneno))
    {
  return true;
    }
  else
    {
    alert("invalid Number");
    return false;

    }
}