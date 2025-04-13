import BaseProjectCard from './BaseProjectCard';

interface ProjectCardCSProps {
  index: number;
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  imageSrc: string;
  techStack: string[];
  githubLink?: string;
  demoLink?: string;
}

export default function ProjectCardCS(props: ProjectCardCSProps) {
  return (
    <BaseProjectCard
      index={props.index}
      title={props.title}
      description={props.description}
      tools={props.techStack}
      imageUrl={props.imageSrc || ''}
      category="cs"
      links={{
        github: props.githubLink,
        live: props.demoLink
      }}
      problem={props.problem}
      solution={props.solution}
      impact={props.impact}
    />
  );
} 