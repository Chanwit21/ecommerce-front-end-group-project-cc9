import React from "react";

function InboxMessage() {
  return (
    <div>
      <div className="container my-5" style={{ width: "75%" }}>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <div className="d-flex bd-highlight">
                  <div
                    class="p-2 flex-fill bd-highlight"
                    style={{ minWidth: "25vw " }}
                  >
                    John Doe
                  </div>
                  <div
                    className="p-2 flex-fill bd-highlight"
                    style={{ minWidth: "25vw" }}
                  >
                    john_doe@gmail.com
                  </div>
                  <div className="p-2 flex-fill bd-highlight">
                    23 October 2021 13:31
                  </div>
                </div>
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body my-2 mx-2">
                <div>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries.
                  <button className="btn btn-outline-danger btn-sm float-end pt-1">
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <div className="d-flex bd-highlight">
                  <div
                    class="p-2 flex-fill bd-highlight"
                    style={{ width: "25vw " }}
                  >
                    John Doe
                  </div>
                  <div
                    className="p-2 flex-fill bd-highlight"
                    style={{ width: "25vw" }}
                  >
                    john_doe@gmail.com
                  </div>
                  <div className="p-2 flex-fill bd-highlight">
                    23 October 2021 13:31
                  </div>
                </div>
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body my-2 mx-2">
                <div>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries.
                  <button className="btn btn-outline-danger btn-sm float-end pt-1">
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
              >
                <div className="d-flex bd-highlight">
                  <div
                    class="p-2 flex-fill bd-highlight"
                    style={{ width: "25vw " }}
                  >
                    John Doe
                  </div>
                  <div
                    className="p-2 flex-fill bd-highlight"
                    style={{ width: "25vw" }}
                  >
                    john_doe@gmail.com
                  </div>
                  <div className="p-2 flex-fill bd-highlight">
                    23 October 2021 13:31
                  </div>
                </div>
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body my-2 mx-2">
                <div>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries.
                  <button className="btn btn-outline-danger btn-sm float-end pt-1">
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="true"
                aria-controls="collapseFour"
              >
                <div className="d-flex bd-highlight">
                  <div
                    class="p-2 flex-fill bd-highlight"
                    style={{ width: "25vw " }}
                  >
                    John Doe
                  </div>
                  <div
                    className="p-2 flex-fill bd-highlight"
                    style={{ width: "25vw" }}
                  >
                    john_doe@gmail.com
                  </div>
                  <div className="p-2 flex-fill bd-highlight">
                    23 October 2021 13:31
                  </div>
                </div>
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body my-2 mx-2">
                <div>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries.
                  <button className="btn btn-outline-danger btn-sm float-end pt-1">
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="true"
                aria-controls="collapseFive"
              >
                <div className="d-flex bd-highlight">
                  <div
                    class="p-2 flex-fill bd-highlight"
                    style={{ width: "25vw " }}
                  >
                    John Doe
                  </div>
                  <div
                    className="p-2 flex-fill bd-highlight"
                    style={{ width: "25vw" }}
                  >
                    john_doe@gmail.com
                  </div>
                  <div className="p-2 flex-fill bd-highlight">
                    23 October 2021 13:31
                  </div>
                </div>
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body my-2 mx-2">
                <div>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries.
                  <button className="btn btn-outline-danger btn-sm float-end pt-1">
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InboxMessage;
