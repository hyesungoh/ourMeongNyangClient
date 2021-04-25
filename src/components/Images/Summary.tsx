import * as style from "style/Images/SummaryStyle";

interface ISummaryProps {
    text: string;
}

const Summary = (props: ISummaryProps) => {
    return (
      <style.SummaryCover>
        <style.StyledSummary>{props.text}</style.StyledSummary>
      </style.SummaryCover>
    );
}

export default Summary;