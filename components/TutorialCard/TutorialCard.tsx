import getIconFromStr from "../Icon/Icon";

type TutorialCardProps = {
  title: any;
  description: any;
  difficulty: number;
  points: number;
  icon: string;
  code: string;
};

const TutorialCard = ({
  title,
  description,
  difficulty,
  points,
  icon,
  code,
}: TutorialCardProps) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:bg-base-300">
      <div className="card-body">
        <div className="mockup-code">
          <pre className="text-warning">
            <code>{code}</code>
          </pre>
        </div>
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
