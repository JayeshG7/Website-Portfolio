import BaseProjectCard from './BaseProjectCard';

interface ProjectCardAdProps {
  index: number;
  name: string;
  context: string;
  objective: string;
  audience: string;
  insight: string;
  thumbnailSrc: string;
  pdfLink?: string;
  pptLink?: string;
  tools: string[];
}

export default function ProjectCardAd(props: ProjectCardAdProps) {
  return (
    <BaseProjectCard
      index={props.index}
      title={props.name}
      description={props.context}
      tools={props.tools}
      imageUrl={props.thumbnailSrc || ''}
      category="advertising"
      links={{
        report: props.pdfLink,
        live: props.pptLink
      }}
      businessQuestion={props.objective}
      methodology={`${props.audience}`}
      keyFindings={[props.insight]}
    />
  );
} 