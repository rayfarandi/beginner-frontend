import React  from 'react';
import * as Icon from 'react-feather';

const Chat = () => {
  const [isChatOpen, setIsChatOpen] = React.useState(false);

  return (
    <>
      <div className={`flex ${isChatOpen? 'flex-col-reverse':''} fixed bottom-10 right-10 z-10`}>
        <div
          className="flex justify-center items-center bg-slate-700 rounded-full p-2 w-12 h-12 cursor-pointer"
          onClick={() => setIsChatOpen(!isChatOpen)}  
        >
          <Icon.MessageCircle />
        </div>

        {isChatOpen && (
          <div className="w-72 h-96 rounded-2xl flex flex-col bg-white ">
            <div className="flex border-t-[1rem] border-[#FF8906] rounded-tr-2xl rounded-tl-2xl pl-4 gap-4 py-2">
                            <div>
                            <img className="w-16 h-16 rounded-full" src="https://images.pexels.com/photos/14756950/pexels-photo-14756950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                            </div>
                            <div className="admin-support">
                            <h1 className="font-bold">Maria Angela</h1>
                            <h1 className="text-slate-700">Admin Support</h1>
                            </div>
                        </div>

                        <hr className="border border-gray-200" />
                
                        <div className="chats p-4 flex flex-col gap-4 h-56">
                            <div className="flex items-center gap-4">
                            <div>
                                <img className="w-8 h-8 rounded-full" src="https://images.pexels.com/photos/14756950/pexels-photo-14756950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                            </div>
                            <p className="text-xs text-[#4F5665] bg-[#E8E8E84D] rounded-md p-2">Halo, Ada yang bisa kami bantu?</p>
                            </div>
                
                            <div className="flex items-center justify-end gap-4">
                                <p className="text-xs text-[#4F5665]  bg-[#E8E8E84D] rounded-md p-2">Saya kesulitan mencari kopi</p>
                                <div>
                                <img className="w-8 h-8 rounded-full" src="https://images.pexels.com/photos/12657069/pexels-photo-12657069.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                                </div>
                            </div>
                        </div>
                
                        <div className="flex-1 flex items-center justify-center px-4 gap-2">
                            <input className="w-4/5 rounded-md text-xs p-3 border border-[#DEDEDE]" type="text" placeholder="Masukan Pesan Anda"/>
                            <div className="bg-[#FF8906] rounded-md p-2">
                            <Icon.Send className="h-5" />
                            </div>
                        </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Chat;
