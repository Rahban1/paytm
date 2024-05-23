import { useNavigate } from "react-router-dom";
import { BottonWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { Dashboard } from "./Dashboard";


export function Signin() {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign in"}/>
          <SubHeading label={"Enter your credentials to access your account"}/>
          <InputBox placeholder={"Your email here"} label={"Email"}/>
          <InputBox placeholder={"password"} label={"Password"}/>
          <div className="pt-4">
            <Button onClick={async ()=>{
              const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                username,
                password
              });
              navigate("/dashboard")
            }} label={"Sign in"}/>
          </div>
          <BottonWarning label={"Don't have an account?"} buttontext={"Sign up"} to={"/signup"}/>
        </div>
      </div> 
    </div>

  )
}
