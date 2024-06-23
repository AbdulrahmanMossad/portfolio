import Lottie from "lottie-react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import doneAnimation from "./../animation/done-animation.json";
import contactAnimation from "./../animation/contact-ainimation.json";
// ######################################we will use formspree for sending emails to my email#######################
const Contact = () => {
  const [state, handleSubmit] = useForm("mvoewvjy");
  // if (state.succeeded) {
  //     return <p>Thanks for joining!</p>;
  // }
  return (
    <section className="contact-us" >
      <div
        className="flex "
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <form className="" onSubmit={handleSubmit}>
          <h1 className="title">
            <span className="icon-mail"></span>Contact Me
          </h1>
          <p className="subtitle">
            contact Me to get more information and notifications.
          </p>
          <div className="flex ">
            <label htmlFor="email" className="lbl">
              Email Address:
            </label>
            <input
              type="email"
              autoComplete="off"
              id="email"
              name="email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex " style={{ marginTop: "24px" }}>
            <label htmlFor="message" className="lbl">
              Your Message:
            </label>
            <textarea id="message" name="message" required />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="submit" type="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "Submit"}
          </button>

          {state.succeeded ? (
            <p
              className="success"
              style={{ fontSize: "18px", marginTop: "1.8rem" }}
            >
              <Lottie
                loop="false"
                style={{ height: "37px" }}
                animationData={doneAnimation}
              />{" "}
              Your Message has been sent successfully.
            </p>
          ) : null}
        </form>
        <div className="animation" style={{ marginRight: "100px" }}>
          <Lottie
            animationData={contactAnimation}
            style={{ height: 355 }}
            className="contact-animation"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
