import './App.css';
import img2 from './images/softwareDev.jpg';
import logo from './images/bayDevelopsLogo(black).png';
import {Button} from "@mui/material";
import { Link } from 'react-router-dom';

function SoftwareDevServicePage() {
  return (
    <>
    <div class="servicepage">
        <div class="text">
          <div class="servicepageLogo">
            <img src={logo} alt="logoImg" width="400" height="auto" />
          </div>

            <b>About Our Software Development Services</b>

            <p></p>

            <div>At Bay Develops, we offer a comprehensive range of software development services to 
              help businesses of all sizes create and maintain high-quality, reliable software solutions. 
              Our team of experienced and skilled developers can help you with everything from defining your 
              requirements and designing your software architecture to developing, testing, and deploying your 
              software.</div>

            <p></p>

            <div>We understand that every business is different, so we take a personalized approach to every 
              software development project. We start by working with you to understand your unique needs and 
              goals. Then, we develop a custom plan to create a software solution that will help you achieve 
              your business objectives.</div>

            <p></p>

            <b>We offer a wide range of software development services, including:</b>

            <p></p>

            <ul>
              <li>Custom software development</li>
              <li>Web application development</li>
              <li>Mobile application development</li>
              <li>Desktop application development</li>
              <li>Cloud application development</li>
              <li>Enterprise software development</li>
              <li>DevOps consulting and implementation</li>
              <li>Software testing and quality assurance</li>
            </ul>
            

            <b>We also offer a variety of additional services, such as:</b> 

            <ul>
              <li>Software maintenance and support</li>
              <li>Software integration</li>
              <li>Software migration</li>
              <li>Software training</li>
            </ul>

            <div>We are committed to providing our clients with the highest quality software development 
              services. We use the latest technologies and best practices to develop software solutions 
              that are secure, reliable, and easy to use. We also offer a variety of support and maintenance 
              services to ensure that your software is always running smoothly.</div>

            <p></p>

            <b>Why Choose Us for Your Software Development Needs?</b>

            <p></p>

            <div>Here are just a few reasons why you should choose Bay Develops for your software development needs:</div>

            <ul>
              <li>We have a team of experienced and skilled developers who are passionate about their work.</li>
              <li>We offer a wide range of software development services to meet the needs of businesses of all sizes.</li>
              <li>We take a personalized approach to every project and work closely with our clients to understand their unique needs and goals.</li>
              <li>We use the latest technologies and best practices to develop software solutions that are secure, reliable, and easy to use.</li>
              <li>We offer a variety of support and maintenance services to ensure that your software is always running smoothly.</li>
            </ul>

            <div>If you are looking for a reliable and experienced software development company, contact us today. 
              We will be happy to discuss your needs and help you create a software solution that will help you 
              achieve your business objectives.</div>

            <Button
              className="self-stretch"
              color="error"
              name="Purchse Service"
              size="large"
              variant="contained"
              component={Link}
              to="/paymentPage"
            >
              Purchase Service
            </Button>
        </div>
        <div>
            <img src={img2} alt="softwareDevImg" />
        </div>
    </div>
    </>
  );
}

export default SoftwareDevServicePage;
