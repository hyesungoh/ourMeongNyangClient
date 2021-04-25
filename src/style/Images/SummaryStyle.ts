import styled from "styled-components";

const opacityDuration = 0.5;
const fontSize = {
  pc: 16,
  tablet: 14,
  mobile: 11,
};

export const SummaryCover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  div {
    top: 100%;
    transition: top ${opacityDuration}s;
  }

  :hover {
    div {
      top: 70%;
      transition: top ${opacityDuration}s;
    }
  }
`;

export const StyledSummary = styled.div`
  width: 100%;
  height: 100%;
  padding: 5%;
  position: absolute;
  
  background-color: rgba(0 0 0 / 50%);
  color: white;
  font-weight: 700;
  text-align: center;
  user-select: none;

  /* PC size */
  @media all and (min-width: 1024px) {
    font-size: ${fontSize.pc}px;
  }
  /* tablet size */
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: ${fontSize.tablet}px;
  }
  /* mobile size */
  @media all and (max-width: 767px) {
    font-size: ${fontSize.mobile}px;
  }
`;
