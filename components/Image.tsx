import Image from "next/image"

const Img: React.FC<any> = (props) => {
  return <Image {...props} src={"/zhiyunservice" + props.src} />
}

export default Img
