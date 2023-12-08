function Faqs() {

  return (
    <div className="lg:px-20 px-10 py-10 ">
      <div>
        <h1
          className="text-4xl font-bold text-center"
          style={{ color: "#009781" }}
        >
          FAQs
        </h1>
      </div>

      <div className="join join-vertical w-full py-4">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Apakah KlikHeula gratis?
          </div>
          <div className="collapse-content">
            <p>
              Kamu dapat dengan bebas mengakses seluruh informasi kesehatan yang
              terdapat di KlinikHeula kapanpun dan dimanapun
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Berapa tarif untuk berkonsultasi dengan dokter?
          </div>
          <div className="collapse-content">
            <p>
              Kamu dapat berkonsultasi dengan dokter kapan saja dan di mana
              saja. KlikHeula menyediakan pelayanan medis jarak jauh dengan
              dokter umum dan spesialis dengan harga terjangkau
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Bagaimana cara membuat reservasi dokter?
          </div>
          <div className="collapse-content">
            <p>
              Kamu dapat melakukannya dengan mudah, dengan cara : Buka Halaman
              utama KlinikHeula, Pilih Rekomendasi dokter yang tersedia,
              Tentukan tanggal dan jam konsultasi, Pilih metode konsultasi, dan
              Pilih metode pembayaran
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Apakah saya akan mendapatkan obat?
          </div>
          <div className="collapse-content">
            <p>
              Pelayanan medis jarak jauh di KlinikHeula belum menyertakan
              pemberian obat secara langsung. Dokter akan memberikan resep
              digital sesuai dengan kondisi Anda yang dapat ditebus di apotek
              terdekat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs