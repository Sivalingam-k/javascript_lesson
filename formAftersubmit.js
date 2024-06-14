function checkAll(){
    let  ufname=document.getElementById("fname").value;
   let regfname="^[a-zA-Z]{3-15}$";

   let uedu=document.myform.edu;
    if(ufname.trim()===""){
        window.alert("this is required");
        return false;
    }
    if(!ufname.trim().match(regfname)){
        window.alert("user name must containe min3 and max 15 characters");
        return false;
    }
    if(uedu[0].checked==false && uedu[1].checked==false && uedu[2].checked==false && uedu[3].checked==false && uedu[4].checked==false){
        window.alert("please select your qualification");
        return false;
    }
}