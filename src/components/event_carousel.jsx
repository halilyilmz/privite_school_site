import React from 'react'
import { useState } from 'react';
import sanityClient from '@sanity/client'
import createClient from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url';
import { useEffect } from 'react';


export default function Event_carousel() {
    const [w1,setw1]=useState("w-[55%]");
    const [w2,setw2]=useState("w-[30%]");
    const [w3,setw3]=useState("w-[30%]");
    const [w4,setw4]=useState("w-[30%]");
    const [w5,setw5]=useState("w-[30%]");

    
    const [op1,setop1]=useState("opacity-0");
    const [op2,setop2]=useState("opacity-20");
    const [op3,setop3]=useState("opacity-15");
    const [op4,setop4]=useState("opacity-10");
    const [op5,setop5]=useState("opacity-5");

    const [right1,setright1]=useState("right-[50%]");
    const [right2,setright2]=useState("right-[30%]");
    const [right3,setright3]=useState("right-[15%]");
    const [right4,setright4]=useState("right-[5%]");
    const [right5,setright5]=useState("right-[0%]");

    const [z1,setz1]=useState("z-40");
    const [z2,setz2]=useState("z-30");
    const [z3,setz3]=useState("z-20");
    const [z4,setz4]=useState("z-10");
    const [z5,setz5]=useState("z-0");

    const [name1,setname1]=useState(" ");
    const [name2,setname2]=useState(" ");
    const [name3,setname3]=useState(" ");
    const [name4,setname4]=useState(" ");
    const [name5,setname5]=useState(" ");

    const [imgurl1,setimgurl1]=useState("");
    const [imgurl2,setimgurl2]=useState("");
    const [imgurl3,setimgurl3]=useState("");
    const [imgurl4,setimgurl4]=useState("");
    const [imgurl5,setimgurl5]=useState("");

   

    const client = createClient({
        projectId: '09qdqo3k',
        dataset: 'production',
        useCdn: true,
    })

    const builder = imageUrlBuilder(client);
    function urlFor(source) {
      return builder.image(source);
    }

        useEffect(()=>{
    async function fetchfunc() {
        const query = `*[_type == "homepage"]`
        const data = await client.fetch(query)
        setname1(data[0].events[0].eventName);
        setname2(data[0].events[1].eventName);
        setname3(data[0].events[2].eventName);
        setname4(data[0].events[3].eventName);
        setname5(data[0].events[4].eventName);

        setimgurl1(urlFor(data[0].events[0].eventPicture.asset))
        setimgurl2(urlFor(data[0].events[1].eventPicture.asset))
        setimgurl3(urlFor(data[0].events[2].eventPicture.asset))
        setimgurl4(urlFor(data[0].events[3].eventPicture.asset))
        setimgurl5(urlFor(data[0].events[4].eventPicture.asset))

    }

    fetchfunc()
    },[])





    let position =1;

    function change_event(){
            let temp=w1;
            setw1(w2);
            setw2(w3);
            setw3(w4);
            setw4(w5);
            setw5(temp);

            temp=op1;
            setop1(op2);
            setop2(op3);
            setop3(op4);
            setop4(op5);
            setop5(temp);

            temp=right1;
            setright1(right2);
            setright2(right3);
            setright3(right4);
            setright4(right5);
            setright5(temp);

            temp=z1;
            setz1(z2);
            setz2(z3);
            setz3(z4);
            setz4(z5);
            setz5(temp);
        
        }




  return (
    <div class='w-[60%] h-[450px] mt-20 flex relative'>
        

        <div class={` transition-all  h-full ${w5} bg-[#D9D9D9] rounded-b-[10%] drop-shadow-2xl/30 absolute ${z5}  ${right5} `}>
            <div class={`w-full h-full bg-black absolute z-10 ${op5}`}></div>

            <div class="w-full h-[70%] [clip-path:polygon(0_0,100%_0,100%_100%,0_85%)] p-[4px] bg-black">
                <div class="w-full h-full bg-blue-500 [clip-path:polygon(0_0,100%_0,100%_100%,0_85%)] overflow-hidden">
                    {imgurl5 && (<img src={imgurl5} className="w-full h-full object-fill" alt="" />)}
                </div>
            </div>
            <div class="absolute bottom-[50px] left-[8%] text-[#323131] text-4xl">{name5}</div>
        </div>

        <div class={` transition-all  h-full ${w4} bg-[#D9D9D9] rounded-b-[10%] drop-shadow-2xl/30 absolute ${z4}  ${right4} `}>
            <div class={`w-full h-full bg-black absolute z-10 ${op4}`}></div>

            <div class="w-full h-[70%] [clip-path:polygon(0_0,100%_0,100%_100%,0_85%)] p-[4px] bg-black">
                <div class="w-full h-full bg-blue-500 [clip-path:polygon(0_0,100%_0,100%_100%,0_85%)] overflow-hidden">
                    {imgurl4 && (<img src={imgurl4} className="w-full h-full object-fill" alt="" />)}
                </div>
            </div>
            <div class="absolute bottom-[50px] left-[8%] text-[#323131] text-4xl">{name4}</div>
        </div>

        <div class={` transition-all  h-full ${w3} bg-[#D9D9D9] rounded-b-[10%] drop-shadow-2xl/30 absolute ${z3}  ${right3} `}>
            <div class={`w-full h-full bg-black absolute z-10 ${op3}`}></div>

            <div class="w-full h-[70%] [clip-path:polygon(0_0,100%_0,100%_100%,0_85%)] p-[4px] bg-black">
                <div class="w-full h-full bg-blue-500 [clip-path:polygon(0_0,100%_0,100%_100%,0_85%)] overflow-hidden">
                    {imgurl3 && (<img src={imgurl3} className="w-full h-full object-fill" alt="" />)}
                </div>
            </div>
            <div class="absolute bottom-[50px] left-[8%] text-[#323131] text-4xl">{name3}</div>
        </div>

        <div class={` transition-all  h-full ${w2} bg-[#D9D9D9] rounded-b-[10%] drop-shadow-2xl/30 absolute ${z2}  ${right2} `}>
            <div class={`w-full h-full bg-black absolute z-10 ${op2}`}></div>

            <div class="w-full h-[70%] [clip-path:polygon(0_0,100%_0,100%_100%,0_85%)] p-[4px] bg-black">
                <div class="w-full h-full bg-blue-500 [clip-path:polygon(0_0,100%_0,100%_100%,0_85%)] overflow-hidden">
                    {imgurl2 && (<img src={imgurl2} className="w-full h-full object-fill" alt="" />)}
                </div>
            </div>
            <div class="absolute bottom-[50px] left-[8%] text-[#323131] text-4xl">{name2}</div>
        </div>

        <div class={` transition-all  h-full ${w1} bg-[#D9D9D9] rounded-b-[10%] drop-shadow-2xl/30 absolute ${z1}  ${right1} `}>
            <div class={`w-full h-full bg-black absolute z-10 ${op1}`}></div>

            <div class="w-full h-[70%] [clip-path:polygon(0_0,100%_0,100%_100%,0_85%)] p-[4px] bg-black">
                <div class="w-full h-full bg-blue-500 [clip-path:polygon(0_0,100%_0,100%_100%,0_85%)] overflow-hidden">
                    {imgurl1 && (<img src={imgurl1} className="w-full h-full object-fill" alt="" />)}
                </div>
            </div>
            <div class="absolute bottom-[50px] left-[8%] text-[#323131] text-4xl">{name1}</div>
        </div>

        <div class=" z-50 absolute top-[35%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 justify-center items-center w-10 h-10">
            <button onClick={change_event} type="button" class="text-white bg-gray-700 hover:bg-gray-800  opacity-50 active:opacity-50 transition-all font-medium rounded-full text-sm p-10 text-center inline-flex items-center me-2">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            <span class="sr-only">Icon description</span>
            </button>
        </div>
        
    </div>
  );
}