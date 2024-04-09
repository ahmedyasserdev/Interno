import {  Image} from 'react-bootstrap';


const PersonDetails = ({ person  ,} : PersonDetailsProps ) => {
    const { name, socials, email, number, job } = person;
  
    
  
    return (
      <div
  
        className="person_details flex-between gap-5 flex-column"
      >
        <div className="flex-center gap-1 flex-column">
          <h5 className="display-3 fw-bold text-dark">{name}</h5>
          <p className="text-capitalize text-gray-900">{job}</p>
        </div>
  
        <div className="d-flex align-items-center gap-4">
          {socials.map((icon) => (
            <Image key={icon} src={icon} alt="social" width={16} height={16} />
          ))}
        </div>
  
        <div className="text-gray-900 text-center">
          <p>
            {number} <br />
            {email}
          </p>
        </div>
      </div>
    );
  };

  export default PersonDetails
  