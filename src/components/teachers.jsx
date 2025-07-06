import React from 'react'
import { useState } from 'react';
import sanityClient from '@sanity/client'
import createClient from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url';
import { useEffect } from 'react';

const teachers = () => {
    const [department1,setDepartment1]=useState(" ");
    const [department2,setDepartment2]=useState(" ");
    const [department3,setDepartment3]=useState(" ");
    const [department4,setDepartment4]=useState(" ");

    const [name1,setName1]=useState(" ");
    const [name2,setName2]=useState(" ");
    const [name3,setName3]=useState(" ");
    const [name4,setName4]=useState(" ");

    const [uni1,setuni1]=useState(" ");
    const [uni2,setuni2]=useState(" ");
    const [uni3,setuni3]=useState(" ");
    const [uni4,setuni4]=useState(" ");

    const [url1,seturl1]=useState(" ");
    const [url2,seturl2]=useState(" ");
    const [url3,seturl3]=useState(" ");
    const [url4,seturl4]=useState(" ");
    
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
        console.log(data[0].teachers[0].photo.asset);

        
        setName1(data[0].teachers[0].fullName);
        setName2(data[0].teachers[1].fullName);
        setName3(data[0].teachers[2].fullName);
        setName4(data[0].teachers[3].fullName); 

        setDepartment1(data[0].teachers[0].department);
        setDepartment2(data[0].teachers[1].department);
        setDepartment3(data[0].teachers[2].department);
        setDepartment4(data[0].teachers[3].department);

        setuni1(data[0].teachers[0].university);
        setuni2(data[0].teachers[1].university);
        setuni3(data[0].teachers[2].university);
        setuni4(data[0].teachers[3].university);

        seturl1(urlFor(data[0].teachers[0].photo.asset));
        seturl2(urlFor(data[0].teachers[1].photo.asset));
        seturl3(urlFor(data[0].teachers[2].photo.asset));
        seturl4(urlFor(data[0].teachers[3].photo.asset));
        
    }

    fetchfunc()
},[])




  return (
    		<div class=" flex justify-center items-center flex-col  h-[800px] w-screen top-[1600px]  bg-[#BABABA] absolute overflow-hidden">
			<div class=" text-6xl mb-[100px]">Deneyimli Kadromuz</div>
			<div class="w-[75%] h-[400px] flex flex-wrap">
				
				<div class="h-[50%] w-[25%] ">
					<img src={url1} class="w-full h-full object-cover" alt=""  />
				</div>
				<div class="h-[50%] w-[25%] bg-[#D9D9D9] flex flex-col justify-center items-center">
					<div class="text-l font-black">{uni2}</div>
					<div class="text-xl font-normal mt-[10px]">{department2}</div>
					<div class="text-3xl font-light mt-[15px]"> {name2}</div>
				</div>
				<div class="h-[50%] w-[25%] ">
					<img src={url3} class="w-full h-full  object-cover" alt=""/>
				</div>
				<div class="h-[50%] w-[25%] bg-[#D9D9D9] flex flex-col justify-center items-center">
					<div class="text-l font-black">{uni4}</div>
					<div class="text-xl font-normal mt-[10px]">{department4}</div>
					<div class="text-3xl font-light mt-[15px]">{name4}</div>
				</div>
				
				<div class="h-[50%] w-[25%] bg-[#D9D9D9] flex flex-col justify-center items-center">
					<div class="text-l font-black">{uni1}</div>
					<div class="text-xl font-normal mt-[10px]">{department1}</div>
					<div class="text-3xl font-light mt-[15px]">{name1}</div>
				</div>

				<div class="h-[50%] w-[25%] bg-[#D9D9D9]" >
					<img class="w-full h-full  object-cover" src={url2} alt=""/>
				</div>
				<div class="h-[50%] w-[25%] bg-[#D9D9D9] flex flex-col justify-center items-center">
					<div class="text-l font-black">{uni3}</div>
					<div class="text-xl font-normal mt-[10px]">{department3}</div>
					<div class="text-3xl font-light mt-[15px]">{name3}</div>
				</div>
				<div class="h-[50%] w-[25%] ">
					<img src={url4} class="w-full h-full  object-cover" alt=""/>
				</div>
			</div>
		</div>
  )
}

export default teachers