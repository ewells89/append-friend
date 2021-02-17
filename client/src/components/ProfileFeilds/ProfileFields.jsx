import React from "react";

const ProfileFields = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s6">
          <div className="row">
            <div className="col s12 m6">
              <div className="card">
                <div className="card-image">
                  <img src="https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555347235/shape/mentalfloss/silence_of_the_lambs_0.jpg?itok=alannxlk" />
                  <span className="card-title" id="name">
                    name
                  </span>
                </div>

                <div className="card-content">
                  <p> Role, occupation, years of experience, location </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <ul className="collection">
                <li className="collection-item">Git Hub</li>
                <li className="collection-item">E-Mail</li>
                <li className="collection-item">Phone Number</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col s6">
          <div className="col s12">
            <h6 className="header">About Me:</h6>
            <div className="card horizontal">
              <div className="card-stacked">
                <div className="card-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, consequuntur repellendus. Rem repudiandae ut reiciendis eligendi, nihil sunt distinctio. Expedita mollitia doloribus saepe eos aliquam voluptatum consectetur aliquid, rerum ea!</p>
                </div>
                <div className="card-action">
                  <a href="">This is a link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileFields;
