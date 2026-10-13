"use client";

import { useParams, useRouter } from "next/navigation";
import { locationData } from "@/data/locationData";

const Place = () => {
  const params = useParams();
  const router = useRouter();
  const id = params?.id;

  const place = locationData.find((item) => item.id === Number(id));

  if (!place) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020625] text-white">
        <div className="text-center">
          <p className="text-gray-400">Place Not Found</p>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-[#020625] min-h-screen text-white">
      {/* Hero Image */}
      <div className="h-[500px] relative">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="absolute top-6 left-6 z-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </button>

        <img
          src={place.image}
          alt={place.city}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">{place.city}</h1>
            <p className="text-xl text-gray-200">{place.place}</p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Map Section */}
        <div className="max-w-7xl mx-auto px-6 pt-10">
          <h2 className="text-3xl font-bold mb-4">Location</h2>
          <div className="w-20 h-1 bg-[#95FF00] mb-6 rounded-full" />

          {place.mapEmbed ? (
            <iframe
              src={place.mapEmbed}
              className="w-full h-[400px] rounded-2xl border border-white/10"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="w-full h-[400px] flex items-center justify-center bg-[#0A0D26] rounded-2xl">
              <p className="text-gray-400">Map not available</p>
            </div>
          )}
        </div>

        <h2 className="text-4xl mt-12 font-bold mb-4">Station Details</h2>
        <div className="w-20 h-1 bg-[#95FF00] mb-8 rounded-full" />

        <p className="text-gray-300 text-lg mb-12 leading-relaxed">
          {place.description}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#0A0D26] p-6 rounded-2xl border border-white/5 hover:border-[#95FF00]/30 transition-all duration-300 hover:scale-105">
            <h3 className="text-[#95FF00] text-sm uppercase tracking-wide mb-2">
              Charger Type
            </h3>
            <p className="text-xl font-bold">{place.chargerType}</p>
          </div>

          <div className="bg-[#0A0D26] p-6 rounded-2xl border border-white/5 hover:border-[#95FF00]/30 transition-all duration-300 hover:scale-105">
            <h3 className="text-[#95FF00] text-sm uppercase tracking-wide mb-2">
              Speed
            </h3>
            <p className="text-3xl font-bold">{place.chargingSpeed}</p>
          </div>

          <div className="bg-[#0A0D26] p-6 rounded-2xl border border-white/5 hover:border-[#95FF00]/30 transition-all duration-300 hover:scale-105">
            <h3 className="text-[#95FF00] text-sm uppercase tracking-wide mb-2">
              Parking
            </h3>
            <p className="text-3xl font-bold">{place.parking}</p>
          </div>

          <div className="bg-[#0A0D26] p-6 rounded-2xl border border-white/5 hover:border-[#95FF00]/30 transition-all duration-300 hover:scale-105">
            <h3 className="text-[#95FF00] text-sm uppercase tracking-wide mb-2">
              Open
            </h3>
            <p className="text-3xl font-bold">{place.openHours}</p>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-12 bg-[#0A0D26] p-8 rounded-2xl border border-white/5">
          <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
          <p className="text-gray-300">
            Phone: <span className="text-white">{place.contact}</span>
          </p>
          <p className="text-gray-300">
            Email: <span className="text-white">admin@uphillecharge.com</span>
          </p>
          <p className="text-gray-300">
            WhatsApp: <span className="text-white">{place.contact}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Place;

