import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
`;

export const ImageThumb = styled.div`
  flex-grow: 1;
  border-radius: ${p => p.theme.radii.large};
  overflow: hidden;
  box-shadow: ${p => p.theme.shadows.first};
  width: 70%;
`;

export const ImgStyled = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Info = styled.p`
  padding: ${p => p.theme.space[3]}px;
  width: 30%;

  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l}px;
  background-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.large};
  box-shadow: ${p => p.theme.shadows.first};
`;
