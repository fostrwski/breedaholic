import React from "react";

interface FeatureCardProps {
  title: string;
  content: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, content }) => (
  <article className="rounded-xl bg-gray-100 p-6">
    <div className="text-xl font-semibold">{title}</div>

    <div className="mt-2">{content}</div>
  </article>
);

export default FeatureCard;
