import { useState } from "react";
import Preview, { ILink } from "../../components/preview/Preview";
//Heroicons
import { LinkIcon } from "@heroicons/react/solid";
import { TrashIcon } from "@heroicons/react/solid";

//Hooks imports
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDocument } from "../../hooks/useDocument";
import { useFirestore } from "../../hooks/useFirestore";
import { useCollection } from "../../hooks/useCollection";
import { DocumentData } from "firebase/firestore";
import {
  DashboardList,
  SectionLinks,
  StyledCopy,
  StyledDashboard,
} from "./Dashboard.styled";
import { Container } from "../../components/styles/Container.styled";
import { Success } from "../../components/styles/Success.styled";
import { PreviewContainer } from "../../components/styles/PreviewContainer.styled";

const Dashboard = () => {
  const { user } = useAuthContext();
  const { document, error } = useDocument("users", user?.displayName);
  const [copyMessage, setCopyMessage] = useState("");
  const { documents } = useCollection("links");
  const { deleteDocument } = useFirestore("links");
  // Users personal link document
  const linkDoc =
    documents &&
    documents.filter((link: DocumentData) => link.createdBy.id === user?.uid);

  const removeLink = async (linkId: string) => {
    deleteDocument(linkId);
  };
  const copyToClipboard = () => {
    setCopyMessage("");
    const url = navigator.clipboard.writeText(
      `https://linkhub-3a46d.web.app/${user?.displayName}`
    );
    setCopyMessage("Url copied!");
    return setTimeout(() => {
      setCopyMessage("");
    }, 3000);
  };
  if (!document) {
    return (
      <div className="w-full h-screen flex items-center">
        <h1 className="mx-auto text-7xl">Loading...</h1>
      </div>
    );
  }
  return (
    <StyledDashboard>
      <SectionLinks>
        <Container>
          <h2>Links</h2>
          <StyledCopy>
            <button onClick={() => copyToClipboard()}>
              <LinkIcon />
              <span>{`linkhub/${user?.displayName}`}</span>
            </button>
            {copyMessage && <Success>{copyMessage}</Success>}
          </StyledCopy>
          <DashboardList>
            {linkDoc &&
              linkDoc.length > 0 &&
              linkDoc.map((link: ILink) => (
                <li key={link.id}>
                  <h3>{link.title}</h3>
                  <div>
                    <p>{link.url}</p>
                    <TrashIcon onClick={() => removeLink(link.id)} />
                  </div>
                </li>
              ))}
          </DashboardList>
        </Container>
      </SectionLinks>
      <PreviewContainer>
        <Preview {...document} links={linkDoc} />
      </PreviewContainer>
    </StyledDashboard>
  );
};

export default Dashboard;
