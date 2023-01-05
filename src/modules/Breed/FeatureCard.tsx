import React from "react";

interface FeatureCardProps {
  title: string;
  content: any;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, content }) => (
  <article className="rounded-lg border-l-4 border-green-700 px-6 py-4 shadow-xl shadow-gray-100">
    <div className="text-xl font-semibold">{title}</div>

    <div className="mt-2 text-lg">
      {content !== undefined ? content : "Unknown"}
    </div>
  </article>
);

export default FeatureCard;
