export function UIInput ({fn, value}) {
    return (
        <input 
        onChange={fn}
        className='border-slate-200 border-2 
                    text-center font-medium py-1 
                    w-11 mx-1 rounded bg-white 
                    focus:border-indigo-500 outline-none' 
        value={value}
        />
    )
}