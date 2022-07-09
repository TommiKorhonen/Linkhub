import { DocumentData } from "firebase/firestore";
import styled from "styled-components";
import { useFirestore } from "../../hooks/useFirestore";

const LinkEditor = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: white;
  border-radius: 0.375rem;
  margin-bottom: 2rem;
`;

const LinkButton = styled.button`
  background-color: #9ca3af;
  border: none;
  padding: 1rem;
  flex-grow: 1;
  cursor: pointer;
`;
const LinkButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;
const LinkRound = styled(LinkButton)`
  border-radius: 1.5rem;
`;
const LinkRoundSmall = styled(LinkButton)`
  border-radius: 0.75rem;
`;

const LinkEdit = (document: DocumentData) => {
  const { updateDocument } = useFirestore("users");

  const changeStyle = async (e: any) => {
    e.stopPropagation();
    const btnTitle = e.target.title;
    if (!btnTitle) {
      return;
    }
    switch (btnTitle) {
      case "fill-no-border":
        return updateDocument(document.id, {
          linkStyle: { ...document.linkStyle, border_radius: "0" },
        });
      case "fill-border-xl":
        return updateDocument(document.id, {
          linkStyle: { ...document.linkStyle, border_radius: "1.5rem" },
        });
      case "fill-border-lg":
        return updateDocument(document.id, {
          linkStyle: { ...document.linkStyle, border_radius: "0.75rem" },
        });
    }
    return;
  };

  return (
    <>
      <LinkEditor>
        <h3>Fill</h3>
        <LinkButtons>
          <LinkButton
            onClick={(e) => changeStyle(e)}
            title="fill-no-border"
            data-cy="noBorder"
          ></LinkButton>
          <LinkRound
            onClick={(e) => changeStyle(e)}
            title="fill-border-xl"
            data-cy="borderXl"
          ></LinkRound>
          <LinkRoundSmall
            onClick={(e) => changeStyle(e)}
            title="fill-border-lg"
            data-cy="borderLg"
          ></LinkRoundSmall>
        </LinkButtons>
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
      </LinkEditor>
    </>
  );
};

export default LinkEdit;
