import { Link } from "react-router-dom"

export function BottonWarning({ label, buttontext, to }){
    return (
        <div className="py-2 text-sm flex justify-center">
            <div>
                {label}
            </div>
            <Link to={to} classname="pointer underline pl-1 cursor-pointer">
                {buttontext}
            </Link>
        </div>
    )
}