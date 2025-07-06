// src/pages/api/submit-contact.js
import createClient from "@sanity/client";

const token = import.meta.env.CONTACT_TOKEN;

console.log(token)

export const prerender = false;

export async function POST({ request }) {
  const client = createClient({
    projectId: '09qdqo3k',
    dataset: 'production',
    useCdn: false, // yazma işlemleri için false
    apiVersion: '2023-01-01', // eklemen iyi olur
    token: token // buraya token geldi artık
  });

  try {
    const body = await request.json();
    const { name, phone } = body;

    if (!name || !phone) {
      return new Response(
        JSON.stringify({ message: 'Eksik bilgi' }),
        { status: 400 }
      );
    }

    const result = await client.create({
      _type: 'contactForm',
      name,
      phone,
    });

    return new Response(
      JSON.stringify({ message: 'Başarılı', id: result._id }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Sanity create error:", err); // log eklendi
    return new Response(
      JSON.stringify({ message: 'Hata', error: err.message }),
      { status: 500 }
    );
  }
}
