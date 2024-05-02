const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">Contact me</h1>
      <form action="">
        <input type="text" placeholder="your name" className="box" />
        <input type="email" placeholder="your email" className="box" />
        <input type="text" placeholder="subject" className="box" />
        <textarea
          className="box"
          placeholder="your message"
          id=""
          cols={30}
          rows={10}
        ></textarea>
        <button type="submit" className="btn">
          send message
        </button>
      </form>
    </section>
  );
};

export default Contact;
