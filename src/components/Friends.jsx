import Image from "next/image";
import { use } from "react";


const Friends = () => {

   const friendsData = fetch('http://localhost:3000/friends.json').then((res)=>res.json())

    const friends= use(friendsData)
    console.log(friends)
    return (
        <div className="grid grid-cols-4">
                {
                    friends.map( friend => {
                        return(
                            <div key = {friend.id}>

                                <div >
                                    <div className="border text-center p-10" >
                                 {/* <Image src={friend.picture} alt={friend.name} width={100} height={100}> 
                                    
                                 </Image> */}
                                 <h2 className="font-bold">{friend.name}</h2>
                                 <p className="text-[#64748B]">{friend.days_since_contact}</p>
                                 <p className="badge font-semibold text-[#244D3F] bg-[#CBFADB]">{friend.tags}</p>
                                 <p className={`w-fit mx-auto p-1 mt-2 rounded-xl px-4 text-white ${friend.status === "overdue" ? "bg-[#EF4444]"? "bg-[#244D3F]" :"" : "bg-[#EFAD44]"}`}>{friend.status}</p>
                                </div>
                                </div>
                                
                            </div>
                        )
                    })
                }
        </div>
    );
};

export default Friends;