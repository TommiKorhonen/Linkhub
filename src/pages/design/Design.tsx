import { DocumentData } from "firebase/firestore";
import React from "react";
import Preview from "../../components/preview/Preview";
import { Container } from "../../components/styles/Container.styled";
import { PreviewContainer } from "../../components/styles/PreviewContainer.styled";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import { useDocument } from "../../hooks/useDocument";
import { SectionEditors, StyledDesign } from "./Design.styled";
import LinkEdit from "./LinkEdit";
import ProfileEdit from "./ProfileEdit";
import ThemeEdit from "./ThemeEdit";

const Design = () => {
  const { user } = useAuthContext();
  const { document, error } = useDocument("users", user?.displayName);
  const { documents } = useCollection("links");

  // Users personal link document
  const linkDoc =
    documents &&
    documents.filter((link: DocumentData) => link.createdBy.id === user?.uid);

  // console.log(linkDoc);
  if (error) {
    return (
      <div className="text-center h-screen flex items-center">
        <h1 className="mx-auto error text-7xl">{error}</h1>
      </div>
    );
  }
  if (!document) {
    return (
      <div className="w-full h-screen flex items-center">
        <h1 className="mx-auto text-7xl">Loading...</h1>
      </div>
    );
  }
  return (
    <StyledDesign>
      <SectionEditors>
        <Container>
          <h2>Profile</h2>
          <ProfileEdit />
          <h2>Theme</h2>
          <ThemeEdit {...document} />
          <h2>Button style</h2>
          <LinkEdit {...document} />
        </Container>
      </SectionEditors>
      <PreviewContainer>
        <Preview {...document} links={linkDoc} />
      </PreviewContainer>
    </StyledDesign>
  );
};

export default Design;
