export default function Locations() {
  return (
    <div className="items-center justify-center py-24 text-center retro bg-darker">
      <div className="space-y-4 text-2xl text-center">
        <p className="px-12">Thank you so much to these companies for supporting us!</p>
        <div className="flex flex-wrap flex-row justify-center items-center gap-8 py-10 px-8">
          {/* 40px height, but maintain aspect ratio */}
          <img className="h-40 object-contain outline outline-pink outline-4 border-8 border-white rounded-md" src="/city/oshkosh/BuffaloWildWingsLogo.png" alt="Buffalo Wild Wings" />
          <img className="h-40 object-contain outline outline-pink outline-4 border-8 border-white rounded-md" src="/city/oshkosh/SchiekLogo.png" alt="Schiek Sports" />
          <img className="h-40 object-contain outline outline-pink outline-4 border-8 border-white rounded-md" src="/city/oshkosh/TEKSystemsLogo.jpg" alt="TEK Systems" />
        </div>
      </div>
    </div>
  );
}
