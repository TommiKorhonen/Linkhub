import React from "react";
import Avatar from "../../components/avatar/Avatar";
import UserImg from "../../assets/user.png";
interface IUserDoc {
  background_color: string;
  displayName: string;
  photoURL: null | string;
  text_color: string;
}

const Preview: React.FC<IUserDoc> = (props) => {
  const { background_color, displayName, photoURL, text_color } = props;
  return (
    <div className="w-[375px] h-[668px] border-4 border-solid border-black rounded-[35px] overflow-hidden overflow-y-auto">
      <div
        className="flex flex-col py-12 w-full h-full mx-auto"
        style={{ backgroundColor: background_color }}
      >
        <div className="mx-auto px-3">
          <Avatar src={UserImg} h={96} w={96} />
        </div>
        <div className="mt-4">
          <h1 className="text-center" style={{ color: text_color }}>
            @{displayName}
          </h1>
        </div>
        <div className="flex flex-col gap-6 px-3 mt-8">
          <div className="bg-gray-200 p-4 w-full flex items-center justify-center rounded-3xl hover:invert">
            <a>Perkele</a>
          </div>
          <div className="bg-gray-200 p-4 w-full flex items-center justify-center rounded-3xl hover:invert">
            <a>Perkele</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
