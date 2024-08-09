import React from "react";

const Contacts = () => {
  return (
    <div id="contacts">
      <div className="container-fluid text-center my-5">
        <div className="text-center ">
          <h2 className="display-3 fw-bold">Contacts</h2>
        </div>
        <div className="row m-auto mt-5">
          <div className="d-flex flex-column gap-2 text-center fs-1">
            <div className="fs-1">
              <i class="bi bi-envelope-paper"></i> email :{" "}
              <a className="text-reset" href="mailto:butterbear22@gmail.com" target="_blank" rel="noreferrer">
                butterbear22@gmail.com
              </a>
            </div>

            <div>
              <i class="bi bi-telephone"></i> Phone : +82 1084924288
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
