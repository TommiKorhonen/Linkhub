import { DocumentData } from "firebase/firestore";
import Preview from "../../components/preview/Preview";
import { Error } from "../../components/styles/Error.styled";
import { Loading } from "../../components/styles/Loading.styled";
import { PreviewContainer } from "../../components/styles/PreviewContainer.styled";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import { useDocument } from "../../hooks/useDocument";
import { ErrorContainer } from "../user/User";
import { SectionEditors, StyledDesign } from "./Design.styled";
import LinkColors from "./LinkColors";
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
      <ErrorContainer className="text-center h-screen flex items-center">
        <Error>{error}</Error>
      </ErrorContainer>
    );
  }
  if (!document) {
    return (
      <Loading>
        <h1>Loading...</h1>
      </Loading>
    );
  }
  return (
    <StyledDesign>
      <SectionEditors>
        <h2>Profile</h2>
        <ProfileEdit />
        <h2>Theme</h2>
        <ThemeEdit {...document} />
        <h2>Button style</h2>
        <LinkEdit {...document} />
        <h2>Button colors</h2>
        <LinkColors {...document} />
      </SectionEditors>
      <PreviewContainer>
        <Preview {...document} links={linkDoc} />
      </PreviewContainer>
    </StyledDesign>
  );
};

export default Design;
