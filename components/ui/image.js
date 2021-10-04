import Image from "next/image";

//walk through all images into public folder 
function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

//get images array 
let cacheImages = importAll(
  require.context(
    process.env.NEXT_PUBLIC_IMAGE_PATH,
    false,
    /\.(png|jpe?g|svg)$/
  )
);

export default function Img({ s, a, c, ni, w, h }) {
  //not chached? let's get it 
  if (!!cacheImages[s]) {
    let images = importAll(
      require.context(
        process.env.NEXT_PUBLIC_IMAGE_PATH,
        false,
        /\.(png|jpe?g|svg)$/
      )
    );

    cacheImages = { ...cacheImages, images };
  }
  c = c ?? '';
  return (
    <>
      {(typeof ni == 'undefined' || !ni) && !!cacheImages[s] && (
        <img
          className={"ui-image" + (c?" ":"") + c}
          src={cacheImages[s].default}
          layout="fill"
          alt={a ?? ""}
        />
      )}

      {!!ni && !!cacheImages[s] && (
        <Image
        className={c+" ui-image"}
          src={cacheImages[s].default}
          width={w}
          height={h}
          alt={a ?? ""}
        />
      )}
      {!cacheImages[s] && <small>Image not found: {s}</small>}
    </>
  );
}
