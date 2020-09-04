import React, {useState} from 'react';

const Contact = () => {
  const [data, setData] = useState({
    FullName: '',
    Email: '',
    Phone: '',
    Message: ''
  });

  const InputEvent = (event) => {
    const {name, value} = event.target;

    setData((preval) =>{
      return {
        ...preval,
        [name] : value,
      };
    });
  };

  const formSubmit = (e) =>{
    e.preventDefault();
    alert(`My name is ${data.FullName}. My mobile number is ${data.Phone}. My Email is ${data.Email}. I want to tell you ${data.Message} !`);
    console.log(`My name is ${data.FullName}. My mobile number is ${data.Phone}. My Email is ${data.Email}. I want to tell you ${data.Message} !`);
  };

  return (
    <>
    <br /><br /><br />
      <h3 className="text-center">Contact</h3><br />
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto mb-3">
          <form className="font-weight-bold" onSubmit={formSubmit}>

            <div className="form-group ">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" required 
              placeholder="example@gmail.com"
              name="Email"
              value={data.Email}
              onChange={InputEvent} />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div className="form-group">
              <label for="exampleInputName">Full Name</label>
              <input type="text" className="form-control" id="exampleInputName" required 
              placeholder="your name"
              name="FullName"
              value={data.FullName}
              onChange={InputEvent}  />
              
            </div>

            <div className="form-group">
              <label for="exampleInputContact">Contact Num</label>
              <input type="number" className="form-control" id="exampleInputContact" required 
              placeholder="923XXXXXXXX"
              name="Phone"
              value={data.Phone}
              onChange={InputEvent} />
              <small id="contactHelp" className="form-text text-muted">We'll never share your number with anyone else.</small>
              
            </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">Your Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
              placeholder="your message"
              name="Message"
              value={data.Message}
              onChange={InputEvent}>  
              </textarea>
  </div>

            <button type="send" className="btn btn-outline-dark">Send</button>
          </form>
          <br /> <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
