import React from "react";

interface FeatureCardProps {
  title: string;
  content: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, content }) => (
  <article className="rounded-lg bg-gray-100 px-6 py-5">
    <div className="text-xl font-semibold">{title}</div>

    <div className="mt-1">{content !== undefined ? content : "Unknown"}</div>
  </article>
);

export default FeatureCard;
