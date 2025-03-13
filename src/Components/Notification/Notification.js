import React from 'react'

const Notification = () => {
  
    return (
        <>
            <style>
                {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px; /* Scrollbar width */
          }

          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f3f4f6; /* Light gray track */
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #9ca3af; /* Darker gray scrollbar */
            border-radius: 10px; /* Rounded corners */
          }

          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #6b7280; /* Even darker gray on hover */
          }
        `}
            </style>

            <div className="h-[33rem] rounded-lg bg-white">
                <div className="p-4 flex items-center bg-[#0B2641] rounded-md">
                    <img src="https://star.dbtindia.gov.in/assets/icons/announcement_icon.svg" width="40px" height="30pxs" alt />
                    <h2 className="text-white text-xl ">Notifications Links</h2>
                </div>
                <ul className="space-y-2 p-2 rounded-md h-[28rem] overflow-y-scroll custom-scrollbar">
                    {Array(10).fill(0).map((_, index) => (
                        <li
                            key={index}
                            className="bg-gray-100 hover:bg-[#60aee3] hover:text-white p-3 text-lg border-l-4 rounded-lg border text-[#0B2641]"
                            style={{ borderLeftColor: '#0B2641' }}
                        >
                            <a href="#" className="block w-full">Notification {index + 1}: Important</a>
                        </li>
                    ))}
                </ul>

            </div>
        </>
  )
}

export default Notification