import {BsSend } from 'react-icons/bs'
function MessageInput() {
  return (
    <div className="px-4 my-3">
        <div className="w-full relative">
            <input placeholder="Send a Message" type="text" className="border text-sm rounded-lg p-2.5 bg-gray-700 border-gray-600 text-white block w-full " />
            <button type='submit' className="absolute inset-y-0 end-0 flex items-center pe-3 ">
                <BsSend/>
            </button>
        </div>
    </div>
  )
}

export default MessageInput