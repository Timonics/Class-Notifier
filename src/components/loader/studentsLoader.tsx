import { BounceLoader } from "react-spinners"

export default function StudentLoader() {
  return (
    <div className="absolute inset-0 backdrop-blur-xs flex justify-center items-center">
      <BounceLoader size={50} className="animate-spin" color="#32073F" />
    </div>
  );
}
