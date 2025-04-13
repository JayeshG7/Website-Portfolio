import BaseProjectCard from './BaseProjectCard';

interface DataAnalyticsCardProps {
  index: number;
  title: string;
  tools: string[];
  businessQuestion: string;
  methodology: string;
  keyFindings: string[];
  visualSrc: string;
  reportLink?: string;
  surveyLink?: string;
  datasetLink?: string;
}

export default function DataAnalyticsCard(props: DataAnalyticsCardProps) {
  return (
    <BaseProjectCard
      index={props.index}
      title={props.title}
      description={props.businessQuestion}
      tools={props.tools}
      imageUrl={props.visualSrc || ''}
      category="data"
      links={{
        report: props.reportLink,
        survey: props.surveyLink,
        dataset: props.datasetLink
      }}
      businessQuestion={props.businessQuestion}
      methodology={props.methodology}
      keyFindings={props.keyFindings}
    />
  );
} 