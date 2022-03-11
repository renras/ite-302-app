interface Props {
  img: string;
}

const Avatar = ({ img }: Props) => {
  return (
    <div>
      <img
        className="w-8 lg:w-12 border-2 rounded-full border-opacity-0 border-orange hover:border-opacity-100"
        src={img}
        alt="profile-avatar"
      />
    </div>
  );
};

export default Avatar;
