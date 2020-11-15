import styled from "styled-components";

export { SettingsContent, Label };

const Label = styled.label<{ changed: boolean }>`
  text-transform: capitalize;
  ${(props) => props.changed && "text-decoration: line-through"};
`;

const SettingsContent = styled.div`
  padding-left: 20px;
`;
