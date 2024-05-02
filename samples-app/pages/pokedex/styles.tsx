import styled from '@emotion/styled';
import icons from './icons';

export const CardList = styled.div`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5em;
  border-radius: 12px;
  flex: 1;
  min-height: 0;
  background: var(--card-background);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
  backface-visibility: hidden;
`;

export const FrontSide = styled(CardSide)`
  transform: rotateZ(0deg) rotateY(0deg);
  transition: transform 500ms ease;

  header {
    display: flex;
    flex-direction: column;
    min-height: 0;
    align-items: center;
    padding: 0.5em 1em;
  }

  img {
    min-height: 0;
    padding: 0.5em;
    object-fit: contain;
  }

  main {
    text-align: center;
  }
`;

export const BackSide = styled(CardSide)`
  position: absolute;
  inset: 0;
  transform: rotateZ(-15deg) rotateY(180deg);
  transition: transform 500ms ease;

  header {
    padding-top: 0.5em;
    text-align: center;
  }

  main {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

export const Card = styled.div`
  --card-background: ${({ type }) => icons[type].color}33;
  display: flex;
  flex-direction: column;
  position: relative;
  width: clamp(200px, 20% - 1em, 300px);
  height: 300px;
  cursor: pointer;

  :hover ${FrontSide} {
    transform: rotateZ(-15deg) rotateY(180deg);
  }

  :hover ${BackSide} {
    transform: rotateZ(0deg) rotateY(0deg);
  }
`;

export const Id = styled.span`
  display: inline-block;
  font-size: 0.875em;
  font-weight: 500;
  padding: 0.25em 0.5em;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 1em;
`;

export const Title = styled.div`
  font-size: 1.25em;
  margin: 0.25em 0;
`;

export const TypeIcon = styled.div`
  font-family: 'Material SYmbols Outlined';
  font-size: 28px;
  margin-right: 6px;
  color: ${({ name }) => icons[name].color};
  text-shadow: 1px 1px rgba(0, 0, 0, 0.15);

  ::after {
    content: "${({ name }) => icons[name].icon}";
  }
`;

export const Types = styled.div`
  display: flex;
  justify-content: center;  
`;

export const Stats = styled.div`
  font-size: 0.875em;
  background: rgba(0, 0, 0, 0.2);
  padding: 1em;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  & > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const Space = styled.div`
  flex: auto;
`;
