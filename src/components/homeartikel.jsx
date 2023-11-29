import React, { useEffect } from "react";
import dokter from "../assets/dokter.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtikels } from "../redux/actions/artikel-action";

function Artikel() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchArtikels());
  }, [dispatch]);
  
  const data = useSelector((state) => state.artikels);
  console.log(data);
  const artikels = data.listartikel;
  
  const navigate = useNavigate();

  return (
    <div className="lg:px-20 px-10 py-10 ">
      <div>
        <h1
          className="text-3xl font-bold text-center"
          style={{ color: "#009781" }}
        >
          Artikel
        </h1>
      </div>
      <div className="lg:flex flex-row gap-40 items-center">
        <div>
          <img src={dokter} alt="donter" className="hidden lg:flex" />
        </div>

        <div>
          <div className="text-sm py-3 justify-end">
            Artikel ini merupakan sumber informasi penting, pada topik tertentu,
            memberikan penjelasan mendalam dan analisis yang didukung oleh bukti
            yang kuat. Membacanya untuk mendapatkan pemahaman yang lebih baik
            tentang subjek tersebut.
          </div>

          {artikels.map((artikel) => (
            <div className="py-4" key={artikel.id}>
              <div className="card w-full bg-base-100 shadow-2xl image-full">
                <figure>
                  <img src={artikel.image} alt="artikel" />
                </figure>
                <div className="card-body">
                  <h3
                    className="card-title"
                    onClick={() => navigate(`/detailartikel/${artikel.id}`)}
                  >
                    {artikel.title}
                  </h3>
                  <p className="text-sm">{artikel.content}</p>
                  <p>{artikel.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Artikel;
