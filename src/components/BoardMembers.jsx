const BoardMembers = ({ imageSrc, mainText, secondaryText }) => {
    return (
        <div className="person-info-container">
        <div className="person-info-content">
          <div className="person-info-image">
            <img src={imageSrc} alt="Person" />
          </div>
          <div className="person-info-text">
            <div className="main-text">{mainText}</div>
            <p className="secondary-text">{secondaryText}</p>
          </div>
        </div>
      </div>
    );
  }

  export default BoardMembers;
