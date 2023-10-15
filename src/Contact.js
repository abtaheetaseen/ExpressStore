import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 2rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
  <Wrapper>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14600.568895545317!2d90.4242393!3d23.8135411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fb95f16c1%3A0xb333248370356dee!2sJamuna%20Future%20Park!5e0!3m2!1sen!2sbd!4v1693149670285!5m2!1sen!2sbd" width="100%" height="250" style={{border :0}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mzblrwgp"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="Your Name"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter your message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
  </Wrapper>
  );
};

export default Contact;
