import Image from "next/image";

const row1 = [
  { src: "https://aurigaventure.com/wp-content/uploads/2026/01/Lower-Kachura-Lake-and-Shangrila-Resort-560x460.jpg", alt: "Kachura Lake" },
  { src: "https://aurigaventure.com/wp-content/uploads/2026/01/Nanga-Parbat-and-Sheosar-Lake-scaled.jpg", alt: "Nanga Parbat" },
  { src: "https://aurigaventure.com/wp-content/uploads/2014/10/DJI_0122-scaled.jpg", alt: "Aerial Gilgit" },
  { src: "https://aurigaventure.com/wp-content/uploads/2026/01/Glamp-Pakistan-at-Deosai-scaled-e1769679760930.jpg", alt: "Deosai Plains" },
  { src: "https://aurigaventure.com/wp-content/uploads/2026/01/DSC_3514-HDR-1024x683.jpg", alt: "Mountain Vista" },
];

const row2 = [
  { src: "https://aurigaventure.com/wp-content/uploads/2019/01/Dunsa-Valley-Tormik-scaled-e1772014273230-560x460.jpg", alt: "Dunsa Valley" },
  { src: "https://aurigaventure.com/wp-content/uploads/2026/01/org_364545bcd22687ac_1592367926000-2048x1536.jpg", alt: "Chitral" },
  { src: "https://aurigaventure.com/wp-content/uploads/2026/01/IMG_6386-scaled.jpeg", alt: "Landscape" },
  { src: "https://aurigaventure.com/wp-content/uploads/2014/10/IMG_9669-560x460.jpg", alt: "Rakaposhi" },
  { src: "https://aurigaventure.com/wp-content/uploads/2026/01/Glamping-at-Deosai-scaled-e1771302772481.jpg", alt: "Glamping Deosai" },
];

function PhotoRow({ photos, reverse }: { photos: typeof row1; reverse?: boolean }) {
  const doubled = [...photos, ...photos];
  return (
    <div className="flex overflow-hidden">
      <div className={`flex gap-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {doubled.map((photo, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 overflow-hidden"
            style={{ width: 280, height: 180 }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              unoptimized
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#080808]/20 hover:bg-transparent transition-colors duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GalleryStrip() {
  return (
    <section className="bg-[#080808] py-16 overflow-hidden space-y-3">
      <PhotoRow photos={row1} />
      <PhotoRow photos={row2} reverse />
    </section>
  );
}
