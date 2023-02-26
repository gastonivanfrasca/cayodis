import getIconFromStr from "../Icon/Icon";

type TutorialCardProps = {
  title: string;
  description: string;
  difficulty: string;
  points: number;
  icon: string;
};

const TutorialCard = ({
  title,
  description,
  difficulty,
  points,
  icon,
}: TutorialCardProps) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:bg-base-300">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end pt-4">
          <div className="badge badge-lg">🎮 {difficulty}</div>
          <div className="badge badge-lg">⚡ {points}</div>
          <div className="badge badge-lg">{getIconFromStr(icon)}</div>
        </div>
      </div>
    </div>
  );
};

export default TutorialCard;
