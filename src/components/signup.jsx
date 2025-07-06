import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/submit-contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    alert(result.message || 'Başarılı!');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full bg-[#D9D9D9] flex justify-center items-center flex-col"
    >
      <div className="text-6xl w-[100%] text-center">Bir tık uzağınızdayız</div>
      <div className="flex mt-20">
        <input
          type="tel"
          name="phone"
          maxLength="10"
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value.replace(/[^0-9]/g, '') })
          }
          className="text-center placeholder:opacity-55 text-2xl w-60 h-13 bg-[#FFFEFE] border border-gray-300 text-gray-900 rounded-xl focus:ring-blue-400 focus:border-blue-400 block p-2.5 dark:bg-[#FFFEFE] dark:border-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:focus:ring-blue-400 dark:focus:border-blue-400"
          placeholder="05xx xxx xx xx"
          required
        />

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="text-center placeholder:opacity-55 text-2xl ml-24 w-60 h-13 bg-[#FFFEFE] border border-gray-300 text-gray-900 rounded-xl focus:ring-blue-400 focus:border-blue-400 block p-2.5 dark:bg-[#FFFEFE] dark:border-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:focus:ring-blue-400 dark:focus:border-blue-400"
          placeholder="İsim soyisim"
          required
        />
      </div>

      <button
        type="submit"
        className="text-2xl text-gray-900/70 mt-11 bg-[#FFFFFF] hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-2xl px-15 py-4 text-center inline-flex items-center me-2 mb-2"
      >
        GÖNDER
      </button>
    </form>
  );
};

export default Signup;
