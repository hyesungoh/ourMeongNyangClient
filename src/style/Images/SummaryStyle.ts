import styled from "styled-components";

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
  left: 0px;
`;

export const StyledSummary = styled.div`
  width: 100%;
  height: 33%;
  padding: 5%;
  position: absolute;
  overflow: hidden;

  background-color: #fff;
  border: 1px solid lightgray;
  box-shadow: 0 1px 5px 0 lightgray;
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
