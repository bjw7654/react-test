import './Project.css';
import Carousel from './Carousel';

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

type ProjectProps = {
  photos: any;
  link: string | null;
  Title: string;
  projectDetails: string;
  flexDirection: FlexDirection | string;
};

const Project: React.FC<ProjectProps> = ({
  photos,
  link,
  Title,
  projectDetails,
  flexDirection,
}) => {
  // Validating the flexDirection value
  const validatedFlexDirection: FlexDirection = [
    'row',
    'column',
    'row-reverse',
    'column-reverse',
  ].includes(flexDirection as FlexDirection)
    ? (flexDirection as FlexDirection)
    : 'row';

  const detailsArray = projectDetails.split('\n');

  // Dynamically determine the class based on the validatedFlexDirection
  const containerClassName = `${validatedFlexDirection}`;

  return (
    <div className={containerClassName + ' column-mobile'}>
      <Carousel images={photos} link={link} />
      <div>
        <a
          href={link ? link : undefined}
          target="_blank"
          rel="noopener noreferrer">
          <h2 className="title">{Title}</h2>
        </a>
        {detailsArray.map((paragraph, index) => (
          <p
            key={index}
            style={{
              color: 'white',
              fontSize: '1rem',
              marginBottom: '0.5rem',
              marginLeft: '1rem',
              marginRight: '1rem',
            }}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Project;
