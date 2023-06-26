import React, { useState } from 'react';

const Profile = ({
  name,
  title,
  details,
}) => {
  const [showDetails, setShowDetails] = useState(true);
  const handleDetails = () => {
    setShowDetails((oldDetails) => !oldDetails);
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img
        className="card-img-top"
        src=" http://fakeimg.pl/286x180?font=lobster "
        alt="Card cap"
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-subtitle mb-2 text-muted">{title}</p>
        <button
          onClick={handleDetails}
          className="btn btn-primary"
          type="button"
        >
          {showDetails ? 'Hide Details' : 'Display Details'}
        </button>
        {showDetails ? <p className="card-text details">{details}</p> : null}
      </div>
    </div>
  );
};

export default Profile;
