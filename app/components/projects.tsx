import projectsData from '~/resume_content/projects';

import ProjectDetailsModal from './project_details_modal';

export default function Projects({projects}: {projects: typeof projectsData}) {
  const state = {
    deps: {},
    detailsModalShow: false,
  };

  let detailsModalShow = (project: typeof projects[number]) => {
    state.detailsModalShow = true;
    state.deps = project;
  };

  let detailsModalClose = () => (state.detailsModalShow = false);

  var projectsHtml = projects.map(function (project) {
    return (
      <div
        className="col-sm-12 col-md-6 col-lg-4"
        key={project.title}
        style={{ cursor: "pointer" }}
      >
        <span className="portfolio-item d-block">
          <div className="foto" onClick={() => detailsModalShow(project)}>
            <div>
              <img
                src={project.images[0]}
                alt="projectImages"
                height="230"
                style={{
                  marginBottom: 0,
                  paddingBottom: 0,
                  position: "relative",
                }}
              />
              <span className="project-date">{project.startDate}</span>
              <br />
              <p className="project-title-settings mt-3">{project.title}</p>
            </div>
          </div>
        </span>
      </div>
    );
  });

  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title" style={{ color: "black" }}>
          <span>Projects</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">{projectsHtml}</div>
        </div>
        <ProjectDetailsModal
          show={state.detailsModalShow}
          onHide={detailsModalClose}
          data={state.deps}
        />
      </div>
    </section>
  );
}
