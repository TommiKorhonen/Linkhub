import Avatar from "../../components/avatar/Avatar";
import { useDocument } from "../../hooks/useDocument";
import { useParams } from "react-router-dom";
import LinkList from "../../components/linklist/LinkList";
import { useCollection } from "../../hooks/useCollection";
import { DocumentData } from "firebase/firestore";
import { Loading } from "../../components/styles/Loading.styled";
import { LinksContainer, StyledUser, UserWrapper } from "./User.styled";
import { Error } from "../../components/styles/Error.styled";
import styled from "styled-components";

const User = () => {
  let { username } = useParams();
  const { document, error } = useDocument("users", username);
  const { documents } = useCollection("links");

  // Users personal link document
  const linkDoc =
    documents &&
    documents.filter(
      (link: DocumentData) => link.createdBy.id === document.user_id
    );

  if (error) {
    return (
      <ErrorContainer>
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
    <StyledUser
      style={{
        backgroundColor: document.background_color
          ? document.background_color
          : "#ffffff",
      }}
    >
      <UserWrapper>
        {/* Avatar component */}
        <div>
          <Avatar src={document.photoURL} h={96} w={96} />
          <div>
            {/* Title */}
            <h2
              style={{
                color: document.text_color ? document.text_color : "#000000",
              }}
            >
              @{document.displayName}
            </h2>
            {/* Bio */}
            <p style={{ color: document.text_color }}>
              {document.bio ? document.bio : ""}{" "}
            </p>
          </div>
        </div>
        <LinksContainer>
          {linkDoc && <LinkList links={linkDoc} style={document.linkStyle} />}
        </LinksContainer>
      </UserWrapper>
    </StyledUser>
  );
};

export default User;

export const ErrorContainer = styled.div`
  text-align: center;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 auto;
  p {
    margin: auto;
  }
`;
