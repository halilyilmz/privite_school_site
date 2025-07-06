import createClient from '@sanity/client';
export { renderers } from '../../renderers.mjs';

const token = "skYSsuBUehDYzo2HNYD65wOcM4z5i471ycplfkkmrizn8RAi9WWYGPwAV4fHWOwUmHY2s1dHBeVkViakQ0Mk8zpsnqNTnmoeUnAhOkkdPBFteZTMRxqy7T1FW9aNizuazWPApaNQOtAU3wgnxTZcgjuWhIsU803vYHWIagYVAZhW86QorRSN";
const prerender = false;
async function POST({ request }) {
  const client = createClient({
    projectId: "09qdqo3k",
    dataset: "production",
    useCdn: false,
    // yazma işlemleri için false
    apiVersion: "2023-01-01",
    // eklemen iyi olur
    token
    // buraya token geldi artık
  });
  try {
    const body = await request.json();
    const { name, phone } = body;
    if (!name || !phone) {
      return new Response(
        JSON.stringify({ message: "Eksik bilgi" }),
        { status: 400 }
      );
    }
    const result = await client.create({
      _type: "contactForm",
      name,
      phone
    });
    return new Response(
      JSON.stringify({ message: "Başarılı", id: result._id }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Sanity create error:", err);
    return new Response(
      JSON.stringify({ message: "Hata", error: err.message }),
      { status: 500 }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
