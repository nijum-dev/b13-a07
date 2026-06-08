import Image from "next/image";
import Link from "next/link";
import { use } from "react";


const Friends = () => {

    // <div><p className="text-black">hi</p></div>

    const friendsData = fetch('http://localhost:3000/friends.json').then((res) => res.json())

    const friends = use(friendsData)
    console.log(friends)
    return (
               
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2  gap-5 container mx-auto px-20 ml-6xl mr-6xl">      
            {
                friends.map(friend => {
                    return (
                        <Link href={`/friendDetails/${friend.id}`}key={friend.id}>
                            <div >
                                <div className=" border border-gray-200 rounded-xl text-center p-10 bg-white" >
                                    <Image className="rounded-3xl  mx-auto" src={friend.picture} alt={friend.name} width={50} height={70}>
                                    </Image>
                                    <h2 className="font-bold">{friend.name}</h2>
                                    <p className="text-[#64748B]">{friend.days_since_contact}</p>
                                    <p className="badge font-semibold text-[#244D3F] bg-[#CBFADB]">{friend.tags}</p>
                                    <p className={`w-fit mx-auto p-1 mt-2 rounded-xl px-4 text-white ${friend.status === "overdue"
                                        ? "bg-[#EF4444]" : friend.status === "on-track"
                                            ? "bg-[#244D3F]"
                                            : "bg-[#EFAD44]"}`}>{friend.status}</p>
                                </div>
                            </div>

                        </Link>
                    )
                })
            }
        </div>
    );
};

export default Friends;