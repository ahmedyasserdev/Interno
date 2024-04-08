'use client'
import { Container, Row } from 'react-bootstrap';
import { projects } from '@/constants';
import { updateSearchParams } from '@/utils';
import { useRouter } from 'next/navigation';
import ProjectCard from '@/components/shared/ProjectCard';
import PageHeader from '@/components/shared/PageHeader';


const Page = ({ searchParams }: { searchParams: { type: string } }) => {
  const router = useRouter();

  // Filtered Projects based on searchParams
  const filteredProjects = searchParams.type && searchParams.type !== 'all'
    ? projects.filter((project) => project.type === searchParams.type)
    : projects;

  //@ts-ignore
    const types = ['all', ...new Set(projects.map((project) => project.type))];

  const handleUpdateSearchParams = (type: string) => {
    const pathname = updateSearchParams('type', type);
    router.push(pathname);
  };

  return (
    <>
      <PageHeader title="Our Projects" subTitle="Home / Projects" image="/images/projects-banner.png" />

      <section className="section-padding">
        <Container>
          {/* Project Types */}
          <ProjectTypes
            types={types}
            selectedType={searchParams.type}
            handleUpdateSearchParams={handleUpdateSearchParams}
            searchParams ={searchParams}
          />

          {/* Project Cards */}
          <Row className="mt-5">
            {filteredProjects.map((project, index) => (
              <ProjectCard project={project} key={index} index={index} />
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Page;





const ProjectTypes = ({ types, selectedType, handleUpdateSearchParams  , searchParams } :ProjectTypesProps  ) => {
  return (
    <div className="flex-center gap-4 rounded-5 border border-primary flex-wrap mx-auto px-lg-5" style={{ width: "fit-content" }}>
      {types.map((type) => (
        <div className="p-2" key={type} onClick={() => handleUpdateSearchParams(type)}>
          <h5
            style={{ cursor: "pointer" }}
            className={`${
              type === selectedType || (searchParams.type === (null || undefined ) && type === "all"  )
                ? 'bg-primary rounded-4 text-white'
                : 'text-dark'
            } lh-1 fw-bold px-5 py-4 pe-auto text-2 text-capitalize h-100`}
          >
            {type}
          </h5>
        </div>
      ))}
    </div>
  );
};
