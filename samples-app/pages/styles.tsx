import styled from '@emotion/styled';

export const Layout = styled.div`
  height: 100%;
  display: flex;
  padding: 5% max((100% - 1200px) / 2, 5%);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: rgba(255, 255, 255, 0.82);
`;

export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 3em;
  background: rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 12px;
  box-shadow: 0px 9px 16px -3px rgba(0, 0, 0, 0.36);
  overflow: auto;
`;