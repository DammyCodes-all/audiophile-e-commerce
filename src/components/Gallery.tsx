import Image from "next/image";

type ImgSet = {
  mobile: string;
  tablet?: string;
  desktop?: string;
};

type GalleryProp = {
  first: ImgSet;
  second: ImgSet;
  third: ImgSet;
};

const Img = ({ srcSet, alt }: { srcSet: ImgSet; alt?: string }) => {
  return (
    <div className="w-full h-full">
      <Image
        src={srcSet.mobile}
        alt={alt ?? "gallery image"}
        width={1200}
        height={900}
        className="object-cover w-full h-full"
        priority={false}
      />
    </div>
  );
};

const Gallery = ({ gallery }: { gallery?: GalleryProp }) => {
  if (!gallery) return null;

  return (
    <div className="w-full flex flex-col sm:grid sm:grid-cols-[1fr_1.2fr] sm:grid-row-2 gap-5">
      <div>
        <Image
          src={gallery.first.mobile}
          alt="gallery image 1"
          width={540}
          height={320}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="sm:row-span-2 sm:col-span-1 sm:order-0 order-1">
        <Image
          src={gallery.third.mobile}
          alt="gallery image 3"
          width={540}
          height={320}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div>
        <Image
          src={gallery.second.mobile}
          alt="gallery image 2"
          width={540}
          height={320}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default Gallery;
