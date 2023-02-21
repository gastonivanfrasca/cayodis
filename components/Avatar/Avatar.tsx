type AvatarProps = {
  imgSrc: string;
};

const Avatar = (props: AvatarProps) => {
  const src = props.imgSrc || "/assets/avatar.png";
  return (
    <div className="avatar">
      <div className="w-8 rounded">
        <img src={src} width={24} height={24}/>
      </div>
    </div>
  );
};

export default Avatar;
