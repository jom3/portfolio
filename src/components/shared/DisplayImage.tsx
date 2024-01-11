import Image from "next/image";

interface Props{
  imageUrl:string;
  imageAlt:string;
  classes:string;
  width:number;
  height:number;
}

export const DisplayImage = ({classes,height,imageAlt,imageUrl,width}:Props) => {
  return (
    <Image src={imageUrl} alt={imageAlt} width={width} height={height} className={classes} priority/>
  )
}

