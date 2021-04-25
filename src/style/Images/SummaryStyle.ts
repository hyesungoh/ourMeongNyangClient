import styled, { keyframes } from "styled-components";

const opacityDuration = 0.5;
const fontSize = {
  pc: 16,
  tablet: 14,
  mobile: 12,
};

export const SummaryCover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.3);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  opacity: 0;
  transition: opacity ${opacityDuration}s;

  :hover {
    opacity: 1;
    transition: opacity ${opacityDuration}s;
  }
`;

export const StyledSummary = styled.div`
  width: 100%;
  font-weight: 700;
  text-align: center;
  user-select: none;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 0 40px 20px rgba(255, 255, 255, 0.5);

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
