import {
  Server,
  Cloud,
  Database,
  Brain,
  GitBranch,
  Layers3,
} from "lucide-react";

export const services = [
  {
    id: "01",
    title: "Backend Development",
    description:
      "Scalable, maintainable server-side systems built with modern frameworks.",
    technologies: ["Node.js", "Python", "REST", "GraphQL"],
    icon: Server,
  },
  {
    id: "02",
    title: "Cloud Infrastructure",
    description:
      "Architecture, provisioning and management of cloud environments.",
    technologies: ["AWS", "GCP", "Azure", "Terraform"],
    icon: Cloud,
  },
  {
    id: "03",
    title: "Data Engineering",
    description:
      "Build reliable data pipelines and analytics platforms.",
    technologies: ["Spark", "Kafka", "DBT", "BigQuery"],
    icon: Database,
  },
  {
    id: "04",
    title: "AI & Intelligent Systems",
    description:
      "Integrate machine learning and LLMs into products.",
    technologies: ["LLMs", "ML Ops", "Automation"],
    icon: Brain,
  },
  {
    id: "05",
    title: "DevOps & CI/CD",
    description:
      "Automated pipelines and deployment workflows.",
    technologies: ["Docker", "Kubernetes", "GitHub Actions"],
    icon: GitBranch,
  },
  {
    id: "06",
    title: "Software Architecture",
    description:
      "System design consulting and enterprise architecture.",
    technologies: ["DDD", "Event-Driven", "Serverless"],
    icon: Layers3,
  },
];