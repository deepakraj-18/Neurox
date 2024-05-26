import React from 'react'
import './Style.css';
import { useNavigate } from 'react-router-dom';
const Range = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div class="Design-con-1">Our range of </div>
            <div class="Design-con-2">Services</div>
            <div class="Design_page_line aos-animate" data-aos="fade-left"></div>
            <div class="Design">
                <div class="Design-content">
                    <div class="Grid-container">
                        <div class="Grid-item" onClick={() => navigate("services/neurodesign")}>
                            <div class="Design-text-1">NEURODESIGN</div>
                            <div class="Design-text-2">Neuroscientists have revealed insights into how the brain's
                                visual systems work, offering valuable guidance for designers, marketers, and creatives
                                to enhance user engagement and product appeal.</div>
                            <div class="Design-text-3">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm20.368-642.368c-12.496 12.496-12.496 32.752 0 45.248l115.76 115.76H287.68c-17.68 0-32 14.336-32 32s14.32 32 32 32h362.464l-117.76 117.744c-12.496 12.496-12.496 32.752 0 45.248 6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376l189.008-194-189.008-194c-12.512-12.496-32.752-12.496-45.264 0z"></path></svg>
                            </div>
                        </div>
                        <div class="Grid-item" onClick={() => navigate("services/neurobrand-testing")}>
                            <div class="Design-text-1">NEUROBRAND TESTING</div>
                            <div class="Design-text-2">Neurotesting optimizes packaging evaluation, predicting advertising impact efficiently from drawings or interactive narratives for desired campaign outcomes and cost-effectiveness.</div>
                            <div class="Design-text-3">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm20.368-642.368c-12.496 12.496-12.496 32.752 0 45.248l115.76 115.76H287.68c-17.68 0-32 14.336-32 32s14.32 32 32 32h362.464l-117.76 117.744c-12.496 12.496-12.496 32.752 0 45.248 6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376l189.008-194-189.008-194c-12.512-12.496-32.752-12.496-45.264 0z"></path></svg>
                            </div>
                        </div>

                        <div class="Grid-item"onClick={() => navigate("")}>
                            <div class="Design-text-1">NEURO-INFO DEVELOPMENT</div>
                            <div class="Design-text-2">Neuro-informed development applies neuroscience principles to optimize technology and practices, enhancing design and user experience through insights into cognitive processes.</div>
                            <div class="Design-text-3">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm20.368-642.368c-12.496 12.496-12.496 32.752 0 45.248l115.76 115.76H287.68c-17.68 0-32 14.336-32 32s14.32 32 32 32h362.464l-117.76 117.744c-12.496 12.496-12.496 32.752 0 45.248 6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376l189.008-194-189.008-194c-12.512-12.496-32.752-12.496-45.264 0z"></path></svg>
                            </div>
                        </div>

                        <div class="Grid-item"onClick={() => navigate("services/product-testing")}>
                            <div class="Design-text-1">NEUROPACKAGING</div>
                            <div class="Design-text-2">Neuropackaging studies how the consumer's brain is impacted by your packaging design using  EEG. NeuroPackaging provides 100% objective results so that your packing is as successful as  feasible.</div>
                            <div class="Design-text-3">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm20.368-642.368c-12.496 12.496-12.496 32.752 0 45.248l115.76 115.76H287.68c-17.68 0-32 14.336-32 32s14.32 32 32 32h362.464l-117.76 117.744c-12.496 12.496-12.496 32.752 0 45.248 6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376l189.008-194-189.008-194c-12.512-12.496-32.752-12.496-45.264 0z"></path></svg>
                            </div>
                        </div>


                        <div class="Grid-item"onClick={() => navigate("services/user-experience")}>
                            <div class="Design-text-1">USER EXPERIENCE</div>
                            <div class="Design-text-2">Benefits of UX and Usability analysis using biometric and eye tracking tools include measuring  participants' impulsive visual patterns.</div>
                            <div class="Design-text-3">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm20.368-642.368c-12.496 12.496-12.496 32.752 0 45.248l115.76 115.76H287.68c-17.68 0-32 14.336-32 32s14.32 32 32 32h362.464l-117.76 117.744c-12.496 12.496-12.496 32.752 0 45.248 6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376l189.008-194-189.008-194c-12.512-12.496-32.752-12.496-45.264 0z"></path></svg>
                            </div>
                        </div>

                        <div class="Grid-item"onClick={() => navigate("services/product-testing")}>
                            <div class="Design-text-1">PRODUCT TESTING</div>
                            <div class="Design-text-2">At NeuroX, we merge traditional organoleptic testing with advanced scientific tools like biometric response interviews (BRI), EEGs, and face coding for comprehensive product evaluations.</div>
                            <div class="Design-text-3">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm20.368-642.368c-12.496 12.496-12.496 32.752 0 45.248l115.76 115.76H287.68c-17.68 0-32 14.336-32 32s14.32 32 32 32h362.464l-117.76 117.744c-12.496 12.496-12.496 32.752 0 45.248 6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376l189.008-194-189.008-194c-12.512-12.496-32.752-12.496-45.264 0z"></path></svg>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Range