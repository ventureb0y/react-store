import { useEffect, useState } from "react"

export function Notification ({ data }) {
    const [visible, set] = useState(false)
    useEffect(() => {
        set(true)
        setInterval(() => {
            set(false)
        }, 3000)
    }, [])

    return (
        <>
        <div onClick={() => {set(false)}} id={data.id} className={(visible == true ? "pointer-events-auto " : "opacity-0 -translate-y-16 pointer-events-none") + "bg-white p-4 rounded duration-300 max-w-sm cursor-pointer"}>
            <div className="flex items-center">
                <img className="p-2 h-16" src={data.image} alt="" />
                <h4 className="truncate text-black font-medium">{data.title}</h4>
            </div>
        </div>
        </>
    )
}