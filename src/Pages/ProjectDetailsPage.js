import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { projects, ProjectDetails, slugify } from '../Component/Projects';

export default function ProjectDetailsPage() {
  const { slug } = useParams();
  const project = projects.find((item) => slugify(item.title) === slug);

  if (!project) {
    return (
      <section className="project-details-route project-details-not-found">
        <div className="project-details-route-inner">
          <p className="project-details-kicker">Project not found</p>
          <h1>That project does not exist.</h1>
          <Link to="/#projects" className="project-details-link">Back to Projects</Link>
        </div>
      </section>
    );
  }

  return <ProjectDetails project={project} isPage />;
}