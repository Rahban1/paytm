import { useState, useEffect } from "react"
import axios from "axios"

export const Appbar = ()=>{
    const userId = localStorage.getItem("userId");
    const [newUser, setNewUser] = useState(null)
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/bulk")
        .then(response => {
            const user = response.data.user.find(x => x._id === userId);
            setNewUser(user);
        })
    },[])
    if (!newUser) {
        return <div>Loading...</div>;
    }
    const ch = newUser.firstName[0].toUpperCase();
    return (
        <div className="shadow h-14 flex justify-between">
            <div className="flex flex-col justify-center h-full ml-4">
            <img src={"../../public/Paytm_Logo.jpg"} alt="PayTM Logo" className="h-14" />
            </div>
            <div className="flex">
                <div className="flex flex-col justify-center h-full mr-4">
                    Hello
                </div>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {ch}
                    </div>
                </div>
            </div>
        </div>
    )
}