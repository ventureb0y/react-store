export function NotificationLayout ({ children }) {
    return (
        <div className='w-full fixed pointer-events-none'>
            <div className='container pointer-events-none mx-auto p-5 flex justify-end'>
              <div className='w-fit flex gap-2 items-end flex-col-reverse'>
                {children}
              </div>
            </div>
        </div>
    )
}