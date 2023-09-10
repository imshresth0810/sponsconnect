import React from 'react';
import { CCarousel } from '@coreui/react'
import { CCarouselItem } from '@coreui/react'
import { CCarouselCaption } from '@coreui/react'
import { CImage } from '@coreui/react'

const Carousel1 = () => {
    return (
        <>
            <CCarousel controls indicators dark>
                <CCarouselItem>
                    <CImage style={{ margin: "auto" }} className="d-block w-50" src="https://media.istockphoto.com/id/1462691369/photo/portrait-of-confident-young-businesswoman-standing-in-office-with-arms-crossed.webp?b=1&s=612x612&w=0&k=20&c=fI7Ht8KYjKwhVwyd2jOG9aruqR2TlSgqWTAVT7UY4Q8=" alt="slide 1" />
                    <CCarouselCaption className="d-none d-md-block">
                        <h5> Aparna Choudhary</h5>
                        <p>CEo at FernGlas</p>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage style={{ margin: "auto" }} className="d-block w-50" src="https://cdn.pixabay.com/photo/2016/11/19/13/08/business-1839191_640.jpg" alt="slide 1" />
                    <CCarouselCaption className="d-none d-md-block">
                        <h5>Dheeraj Kumar</h5>
                        <p>Chief Executive at Terraform</p>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage style={{ margin: "auto" }} className="d-block w-50" src="https://media.istockphoto.com/id/1435745704/photo/portrait-of-smiling-mid-adult-businessman-standing-at-corporate-office.webp?b=1&s=612x612&w=0&k=20&c=Kjs_YBhIVk_P71Q-oeIF85CiK5B0so_aOSPif2PFwRI=" alt="slide 1" />
                    <CCarouselCaption className="d-none d-md-block">
                        <h5>Aditya Chawla</h5>
                        <p>MD at Nevara</p>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage style={{ margin: "auto" }} className="d-block w-50" src="https://cdn.pixabay.com/photo/2019/12/17/17/09/woman-4702060_640.jpg" alt="slide 2" />
                    <CCarouselCaption className="d-none d-md-block">
                        <h5>Ishita kumari</h5>
                        <p>CTO at Joox</p>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage style={{ margin: "auto" }} className="d-block w-50" src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.webp?b=1&s=612x612&w=0&k=20&c=jaWI_uWYImztzKunKeYmvbWbfLuMmtrSN1n2uo0sMjI=" alt="slide 3" />
                    <CCarouselCaption className="d-none d-md-block">
                        <h5>Akash Sharma</h5>
                        <p>Founder of Cixon</p>
                    </CCarouselCaption>
                </CCarouselItem>
            </CCarousel>
        </>
    );
};

export default Carousel1;