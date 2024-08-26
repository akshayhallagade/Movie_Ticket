import { Check, Wrong } from "../utils/icons";

const StatusComponent = (props) => {
  return (
    <div className=" bg-gray-300 p-2 rounded-md absolute bottom-4 left-4">
      <div className="flex gap-2 items-center justify-center">
        {props.info.success ? (
          <Check className="text-green-700" />
        ) : (
          <Wrong className="text-red-700" />
        )}
        <p className="text-sm">{props.info.message}</p>
      </div>
    </div>
  );
};

export default StatusComponent;
