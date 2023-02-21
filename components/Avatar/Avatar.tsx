import React from "react";
import Image from "next/image";

type AvatarProps = {
  imgSrc: string;
};

const Avatar = (props: AvatarProps) => {
  const src = props.imgSrc || "/assets/avatar.png";
  return (
    <div className="avatar">
      <div className="w-8 rounded">
        <Image
          src={src}
          width={24}
          height={24}
          alt="placeholder image for user avatar"
        />
      </div>
    </div>
  );
};

export default Avatar;
