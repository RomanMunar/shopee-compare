import styled from "styled-components";

export { AuthorImage, AuthorWrapper };

const AuthorImage = styled.img`
  border-radius: 50%;
  width: 40px;
  margin-right: 5px;
`;

const AuthorWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: max-content;
  margin: auto;
`;
