import { e as createComponent, f as createAstro, h as addAttribute, k as renderHead, l as renderComponent, r as renderTemplate } from '../chunks/astro/server_Jh5tXDox.mjs';
import 'kleur/colors';
/* empty css                                 */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import createClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
export { renderers } from '../renderers.mjs';

function Event_carousel() {
  const [w1, setw1] = useState("w-[55%]");
  const [w2, setw2] = useState("w-[30%]");
  const [w3, setw3] = useState("w-[30%]");
  const [w4, setw4] = useState("w-[30%]");
  const [w5, setw5] = useState("w-[30%]");
  const [op1, setop1] = useState("opacity-0");
  const [op2, setop2] = useState("opacity-20");
  const [op3, setop3] = useState("opacity-15");
  const [op4, setop4] = useState("opacity-10");
  const [op5, setop5] = useState("opacity-5");
  const [right1, setright1] = useState("right-[50%]");
  const [right2, setright2] = useState("right-[30%]");
  const [right3, setright3] = useState("right-[15%]");
  const [right4, setright4] = useState("right-[5%]");
  const [right5, setright5] = useState("right-[0%]");
  const [z1, setz1] = useState("z-40");
  const [z2, setz2] = useState("z-30");
  const [z3, setz3] = useState("z-20");
  const [z4, setz4] = useState("z-10");
  const [z5, setz5] = useState("z-0");
  const [name1, setname1] = useState(" ");
  const [name2, setname2] = useState(" ");
  const [name3, setname3] = useState(" ");
  const [name4, setname4] = useState(" ");
  const [name5, setname5] = useState(" ");
  const [imgurl1, setimgurl1] = useState("");
  const [imgurl2, setimgurl2] = useState("");
  const [imgurl3, setimgurl3] = useState("");
  const [imgurl4, setimgurl4] = useState("");
  const [imgurl5, setimgurl5] = useState("");
  const client = createClient({
    projectId: "09qdqo3k",
    dataset: "production",
    useCdn: true
  });
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }
  useEffect(() => {
    async function fetchfunc() {
      const query = `*[_type == "homepage"]`;
      const data = await client.fetch(query);
      setname1(data[0].events[0].eventName);
      setname2(data[0].events[1].eventName);
      setname3(data[0].events[2].eventName);
      setname4(data[0].events[3].eventName);
      setname5(data[0].events[4].eventName);
      setimgurl1(urlFor(data[0].events[0].eventPicture.asset));
      setimgurl2(urlFor(data[0].events[1].eventPicture.asset));
      setimgurl3(urlFor(data[0].events[2].eventPicture.asset));
      setimgurl4(urlFor(data[0].events[3].eventPicture.asset));
      setimgurl5(urlFor(data[0].events[4].eventPicture.asset));
    }
    fetchfunc();
  }, []);
  function change_event() {
    let temp = w1;
    setw1(w2);
    setw2(w3);
    setw3(w4);
    setw4(w5);
    setw5(temp);
    temp = op1;
    setop1(op2);
    setop2(op3);
    setop3(op4);
    setop4(op5);
    setop5(temp);
    temp = right1;
    setright1(right2);
    setright2(right3);
    setright3(right4);
    setright4(right5);
    setright5(temp);
    temp = z1;
    setz1(z2);
    setz2(z3);
    setz3(z4);
    setz4(z5);
    setz5(temp);
  }
  return /* @__PURE__ */ jsxs("div", { class: "w-[60%] h-[450px] mt-20 flex relative", children: [
    /* @__PURE__ */ jsxs("div", { class: ` transition-all  h-full ${w5} bg-[#D9D9D9] rounded-b-[10%] drop-shadow-2xl/30 absolute ${z5}  ${right5} `, children: [
      /* @__PURE__ */ jsx("div", { class: `w-full h-full bg-black absolute z-10 ${op5}` }),
      /* @__PURE__ */ jsx("div", { class: "w-full h-[70%] [clip-path:polygon(0_0,100%_0,100%_100%,0_85%)] p-[4px] bg-black", children: /* @__PURE__ */ jsx("div", { class: "w-full h-full bg-blue-500 [clip-path:polygon(0_0,100%_0,100%_100%,0_85%)] overflow-hidden", children: imgurl5 && /* @__PURE__ */ jsx("img", { src: imgurl5, className: "w-full h-full object-fill", alt: "" }) }) }),
      /* @__PURE__ */ jsx("div", { class: "absolute bottom-[50px] left-[8%] text-[#323131] text-4xl", children: name5 })
    ] }),
    /* @__PURE__ */ jsxs("div", { class: ` transition-all  h-full ${w4} bg-[#D9D9D9] rounded-b-[10%] drop-shadow-2xl/30 absolute ${z4}  ${right4} `, children: [
      /* @__PURE__ */ jsx("div", { class: `w-full h-full bg-black absolute z-10 ${op4}` }),
      /* @__PURE__ */ jsx("div", { class: "w-full h-[70%] [clip-path:polygon(0_0,100%_0,100%_100%,0_85%)] p-[4px] bg-black", children: /* @__PURE__ */ jsx("div", { class: "w-full h-full bg-blue-500 [clip-path:polygon(0_0,100%_0,100%_100%,0_85%)] overflow-hidden", children: imgurl4 && /* @__PURE__ */ jsx("img", { src: imgurl4, className: "w-full h-full object-fill", alt: "" }) }) }),
      /* @__PURE__ */ jsx("div", { class: "absolute bottom-[50px] left-[8%] text-[#323131] text-4xl", children: name4 })
    ] }),
    /* @__PURE__ */ jsxs("div", { class: ` transition-all  h-full ${w3} bg-[#D9D9D9] rounded-b-[10%] drop-shadow-2xl/30 absolute ${z3}  ${right3} `, children: [
      /* @__PURE__ */ jsx("div", { class: `w-full h-full bg-black absolute z-10 ${op3}` }),
      /* @__PURE__ */ jsx("div", { class: "w-full h-[70%] [clip-path:polygon(0_0,100%_0,100%_100%,0_85%)] p-[4px] bg-black", children: /* @__PURE__ */ jsx("div", { class: "w-full h-full bg-blue-500 [clip-path:polygon(0_0,100%_0,100%_100%,0_85%)] overflow-hidden", children: imgurl3 && /* @__PURE__ */ jsx("img", { src: imgurl3, className: "w-full h-full object-fill", alt: "" }) }) }),
      /* @__PURE__ */ jsx("div", { class: "absolute bottom-[50px] left-[8%] text-[#323131] text-4xl", children: name3 })
    ] }),
    /* @__PURE__ */ jsxs("div", { class: ` transition-all  h-full ${w2} bg-[#D9D9D9] rounded-b-[10%] drop-shadow-2xl/30 absolute ${z2}  ${right2} `, children: [
      /* @__PURE__ */ jsx("div", { class: `w-full h-full bg-black absolute z-10 ${op2}` }),
      /* @__PURE__ */ jsx("div", { class: "w-full h-[70%] [clip-path:polygon(0_0,100%_0,100%_100%,0_85%)] p-[4px] bg-black", children: /* @__PURE__ */ jsx("div", { class: "w-full h-full bg-blue-500 [clip-path:polygon(0_0,100%_0,100%_100%,0_85%)] overflow-hidden", children: imgurl2 && /* @__PURE__ */ jsx("img", { src: imgurl2, className: "w-full h-full object-fill", alt: "" }) }) }),
      /* @__PURE__ */ jsx("div", { class: "absolute bottom-[50px] left-[8%] text-[#323131] text-4xl", children: name2 })
    ] }),
    /* @__PURE__ */ jsxs("div", { class: ` transition-all  h-full ${w1} bg-[#D9D9D9] rounded-b-[10%] drop-shadow-2xl/30 absolute ${z1}  ${right1} `, children: [
      /* @__PURE__ */ jsx("div", { class: `w-full h-full bg-black absolute z-10 ${op1}` }),
      /* @__PURE__ */ jsx("div", { class: "w-full h-[70%] [clip-path:polygon(0_0,100%_0,100%_100%,0_85%)] p-[4px] bg-black", children: /* @__PURE__ */ jsx("div", { class: "w-full h-full bg-blue-500 [clip-path:polygon(0_0,100%_0,100%_100%,0_85%)] overflow-hidden", children: imgurl1 && /* @__PURE__ */ jsx("img", { src: imgurl1, className: "w-full h-full object-fill", alt: "" }) }) }),
      /* @__PURE__ */ jsx("div", { class: "absolute bottom-[50px] left-[8%] text-[#323131] text-4xl", children: name1 })
    ] }),
    /* @__PURE__ */ jsx("div", { class: " z-50 absolute top-[35%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 justify-center items-center w-10 h-10", children: /* @__PURE__ */ jsxs("button", { onClick: change_event, type: "button", class: "text-white bg-gray-700 hover:bg-gray-800  opacity-50 active:opacity-50 transition-all font-medium rounded-full text-sm p-10 text-center inline-flex items-center me-2", children: [
      /* @__PURE__ */ jsx("svg", { class: "w-4 h-4", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 10", children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M1 5h12m0 0L9 1m4 4L9 9" }) }),
      /* @__PURE__ */ jsx("span", { class: "sr-only", children: "Icon description" })
    ] }) })
  ] });
}

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: ""
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/submit-contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    const result = await res.json();
    alert(result.message || "Başarılı!");
  };
  return /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "w-full h-full bg-[#D9D9D9] flex justify-center items-center flex-col",
      children: [
        /* @__PURE__ */ jsx("div", { className: "text-6xl w-[100%] text-center", children: "Bir tık uzağınızdayız" }),
        /* @__PURE__ */ jsxs("div", { className: "flex mt-20", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "tel",
              name: "phone",
              maxLength: "10",
              value: formData.phone,
              onChange: (e) => setFormData({ ...formData, phone: e.target.value.replace(/[^0-9]/g, "") }),
              className: "text-center placeholder:opacity-55 text-2xl w-60 h-13 bg-[#FFFEFE] border border-gray-300 text-gray-900 rounded-xl focus:ring-blue-400 focus:border-blue-400 block p-2.5 dark:bg-[#FFFEFE] dark:border-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:focus:ring-blue-400 dark:focus:border-blue-400",
              placeholder: "05xx xxx xx xx",
              required: true
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              name: "name",
              value: formData.name,
              onChange: (e) => setFormData({ ...formData, name: e.target.value }),
              className: "text-center placeholder:opacity-55 text-2xl ml-24 w-60 h-13 bg-[#FFFEFE] border border-gray-300 text-gray-900 rounded-xl focus:ring-blue-400 focus:border-blue-400 block p-2.5 dark:bg-[#FFFEFE] dark:border-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:focus:ring-blue-400 dark:focus:border-blue-400",
              placeholder: "İsim soyisim",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: "text-2xl text-gray-900/70 mt-11 bg-[#FFFFFF] hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-2xl px-15 py-4 text-center inline-flex items-center me-2 mb-2",
            children: "GÖNDER"
          }
        )
      ]
    }
  );
};

const teachers = () => {
  const [department1, setDepartment1] = useState(" ");
  const [department2, setDepartment2] = useState(" ");
  const [department3, setDepartment3] = useState(" ");
  const [department4, setDepartment4] = useState(" ");
  const [name1, setName1] = useState(" ");
  const [name2, setName2] = useState(" ");
  const [name3, setName3] = useState(" ");
  const [name4, setName4] = useState(" ");
  const [uni1, setuni1] = useState(" ");
  const [uni2, setuni2] = useState(" ");
  const [uni3, setuni3] = useState(" ");
  const [uni4, setuni4] = useState(" ");
  const [url1, seturl1] = useState(" ");
  const [url2, seturl2] = useState(" ");
  const [url3, seturl3] = useState(" ");
  const [url4, seturl4] = useState(" ");
  const client = createClient({
    projectId: "09qdqo3k",
    dataset: "production",
    useCdn: true
  });
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }
  useEffect(() => {
    async function fetchfunc() {
      const query = `*[_type == "homepage"]`;
      const data = await client.fetch(query);
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
    fetchfunc();
  }, []);
  return /* @__PURE__ */ jsxs("div", { class: " flex justify-center items-center flex-col  h-[800px] w-screen top-[1600px]  bg-[#BABABA] absolute overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { class: " text-6xl mb-[100px]", children: "Deneyimli Kadromuz" }),
    /* @__PURE__ */ jsxs("div", { class: "w-[75%] h-[400px] flex flex-wrap", children: [
      /* @__PURE__ */ jsx("div", { class: "h-[50%] w-[25%] ", children: /* @__PURE__ */ jsx("img", { src: url1, class: "w-full h-full object-cover", alt: "" }) }),
      /* @__PURE__ */ jsxs("div", { class: "h-[50%] w-[25%] bg-[#D9D9D9] flex flex-col justify-center items-center", children: [
        /* @__PURE__ */ jsx("div", { class: "text-l font-black", children: uni2 }),
        /* @__PURE__ */ jsx("div", { class: "text-xl font-normal mt-[10px]", children: department2 }),
        /* @__PURE__ */ jsxs("div", { class: "text-3xl font-light mt-[15px]", children: [
          " ",
          name2
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { class: "h-[50%] w-[25%] ", children: /* @__PURE__ */ jsx("img", { src: url3, class: "w-full h-full  object-cover", alt: "" }) }),
      /* @__PURE__ */ jsxs("div", { class: "h-[50%] w-[25%] bg-[#D9D9D9] flex flex-col justify-center items-center", children: [
        /* @__PURE__ */ jsx("div", { class: "text-l font-black", children: uni4 }),
        /* @__PURE__ */ jsx("div", { class: "text-xl font-normal mt-[10px]", children: department4 }),
        /* @__PURE__ */ jsx("div", { class: "text-3xl font-light mt-[15px]", children: name4 })
      ] }),
      /* @__PURE__ */ jsxs("div", { class: "h-[50%] w-[25%] bg-[#D9D9D9] flex flex-col justify-center items-center", children: [
        /* @__PURE__ */ jsx("div", { class: "text-l font-black", children: uni1 }),
        /* @__PURE__ */ jsx("div", { class: "text-xl font-normal mt-[10px]", children: department1 }),
        /* @__PURE__ */ jsx("div", { class: "text-3xl font-light mt-[15px]", children: name1 })
      ] }),
      /* @__PURE__ */ jsx("div", { class: "h-[50%] w-[25%] bg-[#D9D9D9]", children: /* @__PURE__ */ jsx("img", { class: "w-full h-full  object-cover", src: url2, alt: "" }) }),
      /* @__PURE__ */ jsxs("div", { class: "h-[50%] w-[25%] bg-[#D9D9D9] flex flex-col justify-center items-center", children: [
        /* @__PURE__ */ jsx("div", { class: "text-l font-black", children: uni3 }),
        /* @__PURE__ */ jsx("div", { class: "text-xl font-normal mt-[10px]", children: department3 }),
        /* @__PURE__ */ jsx("div", { class: "text-3xl font-light mt-[15px]", children: name3 })
      ] }),
      /* @__PURE__ */ jsx("div", { class: "h-[50%] w-[25%] ", children: /* @__PURE__ */ jsx("img", { src: url4, class: "w-full h-full  object-cover", alt: "" }) })
    ] })
  ] });
};

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderHead()}</head> <body class=" relative overflow-x-clip"> <div class=" top-0 h-[800px] w-screen overflow-hidden bg-amber-500 relative"> <div class="w-full h-[900px] bg-white"> <img class="scale-x-[-1] w-full h-full" src=" /images/ilk.jpg" alt=""></div> <div class="w-[900px] h-[5100px] bg-[#888888] absolute right-0 top-[700px] transform rotate-[50deg] translate-x-1/2 -translate-y-1/2 z-10"> <div class="w-[90px] h-[510px] bg-[#A79E15] absolute left-0 [top:calc(50%+250px)] "></div> <div class="w-[55px] h-[250px] bg-[#BFBFBF] absolute left-[100px] [top:calc(50%-30px)]"></div> </div> <div class="w-[600px] h-[5100px] bg-[#888888] absolute top-[-2500px] left-[0px] transform rotate-[49deg] z-10"> <div class="w-[90px] h-[510px] bg-[#A79E15] absolute right-[20px] [top:calc(50%-400px)] "></div> <div class="w-[55px] h-[250px] bg-[#BFBFBF] absolute right-[200px] [top:calc(50%+100px)]"></div> </div> <div class=" rotate-45 w-screen h-[800px] flex top-0 left-0 z-0 justify-center items-center absolute "> <div class="w-[350px]  h-[350px] bg-[#A79E15] flex justify-center items-center"> <div class=" rotate-[-45deg]"> <div class="text-6xl text-center mb-4 text-white"> EĞİTİM</div> <div class=" text-center text-2xl text-white">Başarı akademide</div> </div> </div> </div> </div> <div class="  h-[800px] max-[800px] w-screen  bg-[#888888] absolute overflow-hidden"> <div class=" bg-[#BFBFBF] top-[200px] left-[80px] absolute " style="width:120px; height:60px; clip-path: polygon(0 0, 50% 0, 100% 100%, 0 100%);"></div> <div class="text-white text-4xl top-[320px] left-[80px] absolute leading-[45px]"> Modern sınıflar,<br>ferah çalışma alanları<br> ve teknolojik donanımlarla <br> öğrenmenin en verimli hali.</div> <div class="text-white text-7xl top-[590px] left-[80px] absolute leading-[45px]"> Yenilenen Mimariz</div> <div class=" w-[480px] h-[1000px] bg-gray-300 rotate-[-17deg] top-[-95px] left-[630px]  absolute flex justify-center items-center overflow-hidden"> <div class="rotate-[17deg] w-[730px] h-[820px] bg-blue-800 absolute"><img src=" /images/bina_3.png" class="w-full h-full" alt=""></div> </div> <div class=" w-[480px] h-[1000px] bg-gray-900 rotate-[-17deg] top-[-95px] left-[1170px]  absolute overflow-hidden"> <div class="rotate-[17deg] w-[550px] h-[820px] bg-blue-800 absolute left-[-140px] mt-[60px]"><img src=" /images/bina_4.png" class="w-full h-full" alt=""></div> </div> </div> ${renderComponent($$result, "Teachers", teachers, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ibrahim/OneDrive/Masa\xFCst\xFC/wep projeleri/alman_site/alman-syte/src/components/teachers.jsx", "client:component-export": "default" })} <div class="w-full h-[800px]  absolute top-[2400px] items-center flex flex-col"> ${renderComponent($$result, "Carousel", Event_carousel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ibrahim/OneDrive/Masa\xFCst\xFC/wep projeleri/alman_site/alman-syte/src/components/event_carousel.jsx", "client:component-export": "default" })} <div class="text-5xl mt-16">Devamlı etkinliklerimiz ile</div> </div> <div class="h-[800px] w-screen top-[3200px] absolute bg-amber-400"> ${renderComponent($$result, "Signup", Signup, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ibrahim/OneDrive/Masa\xFCst\xFC/wep projeleri/alman_site/alman-syte/src/components/signup.jsx", "client:component-export": "default" })} </div> </body></html>`;
}, "C:/Users/ibrahim/OneDrive/Masa\xFCst\xFC/wep projeleri/alman_site/alman-syte/src/pages/index.astro", void 0);

const $$file = "C:/Users/ibrahim/OneDrive/Masaüstü/wep projeleri/alman_site/alman-syte/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
