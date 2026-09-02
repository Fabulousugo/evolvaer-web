import Image from "next/image";

export function ContactSceneLoader() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0"
    >
      {/* Desktop */}
      <Image
        src="/scenes/contact-scene-desktop.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="
          hidden
          object-cover
          md:block
        "
      />

      {/* Mobile */}
      <Image
        src="/scenes/contact-scene-mobile.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="
          object-cover
          md:hidden
        "
      />
    </div>
  );
}