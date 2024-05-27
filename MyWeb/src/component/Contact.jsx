export default function Contact(){
  return(
    <section class="contact" id="Contact">
      <h2  class="heading">Contact <span>Me!</span></h2>
      <form action="./Page/Contact.php" method="GET" class="form">
        <div class="input-box">
          <input type="text" name="Name" placeholder="Full Name"/>
          <input type="email" name="Email" id="email" placeholder="Email
          Address"/>
        </div>
        <div class="input-box">
          <input type="Number" name="Number" placeholder="Mobail Number"/>
          <input type="text" name="Subject" placeholder="Email Subjact"/>
        </div>
        <textarea cols="30" rows="7" name="Messege" placeholder="Type Your Massege"></textarea>
        <input type="submit" name="submit" value="Send Massege" class="btn"
        onclick="Massage()"/>
      </form>
    </section>
  );
}