import React, { useState } from "react";

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const faqData = [
    {
      title: "Apakah KlikHeula gratis?",
      content:
        "Kamu dapat dengan bebas mengakses seluruh informasi kesehatan yang terdapat di KlinikHeula kapanpun dan dimanapun",
    },
    {
      title: "Berapa tarif untuk berkonsultasi dengan dokter?",
      content:
        "Kamu dapat berkonsultasi dengan dokter kapan saja dan di mana saja. KlikHeula menyediakan pelayanan medis jarak jauh dengan dokter umum dan spesialis dengan harga terjangkau",
    },
    {
      title: "Bagaimana cara membuat reservasi dokter?",
      content:
        "Kamu dapat melakukannya dengan mudah, dengan cara : Buka Halaman utama KlinikHeula, Pilih Rekomendasi dokter yang tersedia, Tentukan tanggal dan jam konsultasi, Pilih metode konsultasi, dan Pilih metode pembayaran",
    },
    {
      title: "Apakah saya akan mendapatkan obat?",
      content: 
        "Pelayanan medis jarak jauh di KlinikHeula belum menyertakan pemberian obat secara langsung. Dokter akan memberikan resep digital sesuai dengan kondisi Anda yang dapat ditebus di apotek terdekat",
    },
  ];

  return (
    <div>
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`collapse collapse-arrow bg-white text-black mb-4 p-4 rounded shadow-sm ${
            index === activeIndex ? "active" : ""
          }`}
        >
          <input
            type="radio"
            name="my-accordion-2"
            checked={index === activeIndex}
            onChange={() => handleAccordionClick(index)}
          />
          <div className="collapse-title text-xl font-medium">{faq.title}</div>
          <div className="collapse-content mt-2">
            <p>{faq.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
