import { BottomLeftTile, RightTile, TopLeftTile } from "..";
import Link from "next/link";

const TileSection = () => {
  return (
    <div className=" flex w-full lg:gap-0 py-6 gap-5 lg:flex-row flex-col h-full p-0 lg:px-24 lg:py-5">
      <div className=" w-full lg:w-1/2 h-full lg:px-6 py-0 flex flex-col gap-4">
        <TopLeftTile />
        <BottomLeftTile />
      </div>
      <RightTile />
    </div>
  );
};

export default TileSection;
