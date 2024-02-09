import img1 from './About Us.jpg'

export const About = (props) => {
  return (
    <>
    <div className='headerText' >
      <div class='textOnImage'>
      <u>About Us</u>
        <p id="description">Bay Develops is a forward-thinking IT solutions startup with a core focus on providing
        software development and security solutions to startups and mid-sized enterprises.
        Their mission is to empower businesses by assisting them in building robust software
        infrastructures and ensuring top-tier security measures.</p>
      </div>
    </div>
    <img src={img1} alt="backgroundimg"/>
    </>
  );
}


export default About;