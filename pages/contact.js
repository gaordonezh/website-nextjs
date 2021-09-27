import MainComponent from "../components/MainComponent";
import SubHeader from "../components/SubHeader";
import { FaPlaceOfWorship } from "react-icons/fa";

const Contact = () => {
  return (
    <MainComponent title="Contact">
      <SubHeader title="Contact" />
      <section class="section-margin">
        <div class="container">
          <div class="d-none d-sm-block mb-5 pb-4">
            <div id="map" style={{ height: 420 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d124853.92158149999!2d-77.037568!3d-12.0651776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2spe!4v1632706303889!5m2!1ses!2spe"
                style={{ border: 0, width: "100%", height: 450 }}
                allowfullscreen=""
                loading="lazy"
              />
            </div>
          </div>

          <div class="row align-items-center">
            <div class="col-md-4 col-lg-3 mb-4 mb-md-0">
              <div class="media contact-info">
                <span class="contact-info__icon">
                  <i class="lnr lnr-home">
                    <FaPlaceOfWorship />
                  </i>
                </span>
                <div class="media-body">
                  <h3>California United States</h3>
                  <p>Santa monica bullevard</p>
                </div>
              </div>
              <div class="media contact-info">
                <span class="contact-info__icon">
                  <i class="lnr lnr-phone-handset">
                    <FaPlaceOfWorship />
                  </i>
                </span>
                <div class="media-body">
                  <h3>
                    <a href="tel:454545654">00 (440) 9865 562</a>
                  </h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div class="media contact-info">
                <span class="contact-info__icon">
                  <i class="lnr lnr-envelope">
                    <FaPlaceOfWorship />
                  </i>
                </span>
                <div class="media-body">
                  <h3>
                    <a href="mailto:support@colorlib.com">
                      support@colorlib.com
                    </a>
                  </h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
            <div class="col-md-8 col-lg-9">
              <form action="#/" class="form-contact">
                <div class="row">
                  <div class="col-lg-5">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="email"
                        type="email"
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="subject"
                        type="text"
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                  <div class="col-lg-7">
                    <div class="form-group">
                      <textarea
                        class="form-control different-control w-100"
                        name="textarea"
                        id="textarea"
                        cols="30"
                        rows="6"
                        placeholder="Enter Message"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="form-group text-center text-md-right">
                  <button type="submit" class="btn active btn--leftBorder">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </MainComponent>
  );
};

export default Contact;
