import './App.css';
import img3 from './images/webDev.jpg';
import logo from './images/bayDevelopsLogo(black).png';
import {Button} from "@mui/material";
import { Link } from 'react-router-dom';

function WebDevServicePage() {
  return (
    <>
    <div class="servicepage">
        <div class="text">
          <div class="servicepageLogo">
            <img src={logo} alt="logoImg" width="400" height="auto" />
          </div>

            <b>About Our Web Development Services</b>

            <p></p>

            <div>At Bay Develops, we offer a comprehensive range of web development services to help businesses
               of all sizes create and maintain high-quality, user-friendly websites and web applications. 
               Our team of experienced and skilled developers can help you with everything from designing your
                website's layout and navigation to developing complex custom features and integration.</div>

            <p></p>

            <div>We understand that every business is different, so we take a personalized approach to every web
               development project. We start by working with you to understand your unique needs and goals.
                Then, we develop a custom plan to create a website that will help you achieve your business
                 objectives.</div>

            <p></p>

            <b>We offer a wide range of web development services, including:</b>

            <ul>
              <li>Website design and development</li>
              <li>Web application development</li>
              <li>E-commerce development</li>
              <li>Content management system (CMS) development</li>
              <li>Custom web development</li>
              <li>Web hosting and maintenance</li>
            </ul>

            <b>We also offer a variety of additional services, such as:</b>

            <ul>
              <li>Search engine optimization (SEO)</li>
              <li>Pay-per-click (PPC) advertising</li>
              <li>Social media marketing</li>
              <li>Content creation</li>
            </ul>

            <div>We are committed to providing our clients with the highest quality web development services.
               We use the latest technologies and best practices to create websites that are secure, fast,
                and easy to use. We also offer a variety of support and maintenance services to ensure that
                 your website is always running smoothly.</div>

            <p></p>

            <b>Why Choose Us for Your Web Development Needs?</b>

            <p></p>

            <div>Here are just a few reasons why you should choose Bay Develops for your web development needs:</div>

            <ul>
              <li> We have a team of experienced and skilled developers who are passionate about their work.</li>
              <li>We offer a wide range of web development services to meet the needs of businesses of all sizes.</li>
              <li>We take a personalized approach to every project and work closely with our clients to understand their unique needs and goals.</li>
              <li>We use the latest technologies and best practices to create websites that are secure, fast, and easy to use.</li>
              <li>We offer a variety of support and maintenance services to ensure that your website is always running smoothly.</li>
            </ul>

            <div>If you are looking for a reliable and experienced web development company, contact us today.
               We will be happy to discuss your needs and help you create a website that will help you achieve
                your business objectives.</div>

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
            <img src={img3} alt="webDevImg" />
        </div>
    </div>
    </>
  );
}

export default WebDevServicePage;