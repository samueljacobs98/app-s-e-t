import ContactForm from "../../components/ContactForm/ContactForm";
import Layout from "../../components/Layout/Layout";
import "./Contact.scss";

const Contact = () => {
  return (
    <Layout>
      <div className="contact-container">
        <ContactForm />
      </div>
    </Layout>
  );
};

export default Contact;
