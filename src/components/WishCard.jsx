export default function WishCard({ entry, className = "" }) {
  const base =
    "w-full flex flex-col items-center text-center " +
    "bg-white/90 backdrop-blur rounded-3xl shadow-xl p-4 sm:p-6 " +
    className;

  if (entry.type === "quote") {
    return (
      <div className={base}>
        {/* Image adapts: max height & object-contain handles vertical vs horizontal */}
        {entry.photo && (
          <img
            src={`${import.meta.env.BASE_URL}${entry.photo.startsWith('/') ? entry.photo.slice(1) : entry.photo}`}
            alt={entry.name}
            loading="lazy"
            className="
              max-w-full w-auto max-h-[50vh] 
              object-contain 
              mx-auto mb-4 shadow-md rounded-2xl
            "
          />
        )}

        {/* Full quote text */}
        <p className="w-full text-lg sm:text-xl text-gray-800 leading-relaxed whitespace-pre-line">
          “{entry.text}”
        </p>

        {/* Author name at the end */}
        <p className="mt-3 text-lg text-gray-600">От {entry.name} ❤️</p>
      </div>
    );
  }

  // Video card - only render if src exists
  if (!entry.src) {
    return (
      <div className={base}>
        <p className="text-lg text-gray-600">Видеото не може да бъде заредено.</p>
        <p className="mt-3 text-lg text-gray-600">От {entry.name} ❤️</p>
      </div>
    );
  }

  return (
    <div className={base}>
      <video
        controls
        preload="metadata"
        className="w-full h-auto rounded-xl object-contain max-h-[65vh]"
      >
        <source src={`${import.meta.env.BASE_URL}${entry.src.startsWith('/') ? entry.src.slice(1) : entry.src}`} type="video/mp4" />
        Вашият браузър не поддържа видеото.
      </video>

      <p className="mt-3 text-lg text-gray-600">От {entry.name} ❤️</p>
    </div>
  );
}
