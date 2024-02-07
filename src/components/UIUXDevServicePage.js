import img4 from "./img/uiKeysDev.jpg";
import img5 from "./img/uiLapDev.jpg";
import logo from "./img/bayDevelopsLogo(black).png";
import { Button } from "@mui/material";

export const UIUXDevServicePage = () => {
    return (
        <>
        <div class="servicepage">
            <div class="text">
                <div class="servicepageLogo">
                    <img src={logo} alt="logoImg" width="400" height="auto" />
                </div>

                    <b>About Our UI/UX Design Services</b>

                    <p></p>

                    <div>At Bay Develops, we offer a comprehensive range of UI/UX design services to help businesses of all sizes create and maintain user-friendly and visually, 
                        appealing digital products. Our team of experienced and skilled designers can help you with everything from understanding your user's needs and
                        designing wire-frames and prtotypes to creating high-fidelity mock-ups and implementing your final design.
                        We believe that good UI/UX design is essential for creating successful digital products. We take a user-centered approach to our design process,
                        ensuring that every decision we make is based on the needs and wants of your target users. We also use the latest design trends and technologies to 
                        create interfaces that are both visually appealing and easy to use.</div>

                    <p></p>

                    <b>We offer a wide range of UI/UX design services, including:</b>

                    <p></p>

                    <ul>
                        <li>User research and analysis</li>
                        <li>Wireframing and prototyping</li>
                        <li>Visual design</li>
                        <li>Interaction design</li>
                        <li>Usability testing</li>
                        <li>Accessibility testing</li>
                        <li>Implementation support</li>
                    </ul>
            
                    <b>We also offer a variety of additional services, such as:</b> 

                    <ul>
                        <li>Brand indentity design</li>
                        <li>Content design</li>
                        <li>Icon design</li>
                        <li>Motion graphics design</li>
                        <li>Prototyping tools training</li>
                    </ul>

                    <div>We are committed to providing our clients with the highest quality UI/UX design services. We work closely with our clients at every stage of the design
                        process to ensure that their needs are met and that they are happy with the final results.</div>

                    <p></p>

                    <b>Why Choose Us for Your UI/UX Design Needs?</b>

                    <p></p>

                    <div>Here are just a few reasons why you should choose Bay Develops for your UI/UX design needs:</div>

                    <ul>
                        <li>We have a team of experienced and skilled developers who are passionate about creating user-friendly and visually appealing digital products.</li>
                        <li>We take a user-centered approach to our design process, ensuring that every decision we make is based on the needs and wants of your target 
                            users.</li>
                        <li>We use the latest design trends and technologies to create interfaces that are both visually appealing and easy to use.</li>
                        <li>We offer a wide range of UI/UX design services to meet the needs of businesses of all sizes.</li>
                        <li>We work closely with our clients at every stage of the design process to ensure that their needs are met and that they are happy with the final 
                            results.</li>
                    </ul>

                    <p></p>

                    <div>If you are looking for a reliable and experienced UI/UX design company, contact us today.</div>

                    <Button
                        className="self-stretch"
                        color="error"
                        name="Purchase Service"
                        size="large"
                        variant="contained"
                    >
                        Purchase Service
                    </Button>

            </div>
            <div>
                <img src={img4} alt="uiuxKeyboardImg" />
            </div>
            <div>
                <img src={img5} alt="uiuxLaptopImg" />
            </div>
        </div>
        </>
    );
};

export default UIUXDevServicePage;