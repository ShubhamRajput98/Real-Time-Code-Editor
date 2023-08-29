import { Login, Signup } from "../../../ApiListing/ApiListing";
import { userAction } from "./UserSlice";
import PostApiCall from "../../ApiCalling/PostApiCall";

export const onLoginUser = (email,password,navigation)=>{
    return async (dispatch)=>{
        
        try{
            dispatch(userAction.onLoading({data:true}));
            const url = Login;
            const body = {
                email,
                password
            }
            const response = await PostApiCall(url,body)
            if(response.token){
            dispatch(userAction.onLogin({data:response.token}));
            localStorage.setItem("token", JSON.stringify(response.token));
            dispatch(userAction.onLoading({data:false}));
            navigation("/dashboard")
            }else{
            dispatch(userAction.onLoading({data:false}));
            alert(response.non_field_errors[0]);
            }
        }catch(e){
            console.error(e)
            dispatch(userAction.onLoading({data:false}));
            alert("Somthing went wrong!")
        }
    }
}

export const onSignUpUser = (first_name,last_name,email,password,navigation)=>{
    return async (dispatch)=>{
        try{
            dispatch(userAction.onLoading({data:true}));
            const url = Signup;
            const body = {
                first_name,
                last_name,
                email,
                password
            }
            const response = await PostApiCall(url,body)
            if(response){
                console.log(response)
            dispatch(userAction.onSignup({data:response}));
            localStorage.setItem("user", JSON.stringify(response));
            dispatch(userAction.onLoading({data:false}));
            navigation("/")
            }else{
            dispatch(userAction.onLoading({data:false}));
            alert(response.email);
            }
        }catch(e){
            console.error(e)
            dispatch(userAction.onLoading({data:false}));
            alert("Somthing went wrong!")
        }
    }
}