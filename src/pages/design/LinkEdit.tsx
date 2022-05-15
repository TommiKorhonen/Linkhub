import { DocumentData } from "firebase/firestore";
import { useFirestore } from "../../hooks/useFirestore";

const LinkEdit = (document: DocumentData) => {
  const { updateDocument } = useFirestore("users");
  const changeStyle = async (e: any) => {
    e.stopPropagation();
    const btnTitle = e.target.title;
    if (!btnTitle) {
      return;
    }
    if (btnTitle === "fill-no-border") {
      const linksCopy = [...document.links];
      linksCopy.forEach((link) => (link["style"] = "rounded-none"));
      await updateDocument(document.id, {
        links: linksCopy,
      });
    }
    if (btnTitle === "fill-border-xl") {
      const linksCopy = [...document.links];
      linksCopy.forEach((link) => (link["style"] = "rounded-3xl"));
      await updateDocument(document.id, {
        links: linksCopy,
      });
    }
    if (btnTitle === "fill-border-lg") {
      const linksCopy = [...document.links];
      linksCopy.forEach((link) => (link["style"] = "rounded-lg"));
      await updateDocument(document.id, {
        links: linksCopy,
      });
    }
  };

  return (
    <article className="flex flex-col gap-4 p-4 bg-white rounded-md mb-8">
      <h2>Fill</h2>
      <ul className="flex justify-between gap-4 ">
        <li
          className="bg-gray-400 p-4 flex-grow cursor-pointer"
          onClick={(e) => changeStyle(e)}
          title="fill-no-border"
        ></li>
        <li
          className="bg-gray-400 p-4 flex-grow rounded-3xl cursor-pointer"
          onClick={(e) => changeStyle(e)}
          title="fill-border-xl"
        ></li>
        <li
          className="bg-gray-400 p-4 flex-grow rounded-lg cursor-pointer"
          onClick={(e) => changeStyle(e)}
          title="fill-border-lg"
        ></li>
      </ul>
      {/* <h2>Outline</h2>
      <ul className="flex justify-between gap-4">
        <li
          className="border border-black p-4 flex-grow "
          onClick={(e) => changeStyle(e)}
        ></li>
        <li
          className="border border-black p-4 flex-grow rounded-3xl "
          onClick={(e) => changeStyle(e)}
        ></li>
        <li
          className="border border-black p-4 flex-grow rounded-lg"
          onClick={(e) => changeStyle(e)}
        ></li>
      </ul>
      <h2>Shadow</h2>
      <ul className="flex justify-between gap-4">
        <li
          className=" shadow-xl bg-gray-400 p-4 flex-grow"
          onClick={(e) => changeStyle(e)}
        ></li>
        <li
          className=" shadow-xl bg-gray-400 p-4 flex-grow rounded-3xl"
          onClick={(e) => changeStyle(e)}
        ></li>
        <li
          className=" shadow-xl bg-gray-400 p-4 flex-grow rounded-lg"
          onClick={(e) => changeStyle(e)}
        ></li>
      </ul> */}
    </article>
  );
};

export default LinkEdit;
