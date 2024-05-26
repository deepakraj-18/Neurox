import "./Style.css";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import StarIcon from '@mui/icons-material/Star';

class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //goToSlide: ""
      goToSlide: 5
    };
  }

  slides = [
    {
      key: uuidv4(),
      content: (
        <Card className="card-main">
          <CardBody>
            <CardText className="card-text">
              “I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”
            </CardText>
            <div className="rating">
              <StarIcon style={{ color: 'gold' }}/>
              <StarIcon style={{ color: 'gold' }}/>
              <StarIcon style={{ color: 'gold' }}/>
              <StarIcon style={{ color: 'gold' }}/>
              <StarIcon style={{ color: 'gold' }}/>
            </div>
            <div className=" card_profile"><Stack>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }}/></Stack></div>
            <CardTitle className="card-title" tag="h5">
              Jane Smith
            </CardTitle>
            <div className="card_profile_name">Freelancer</div>
          </CardBody>
        </Card>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card className="card-main">
          <CardBody>
            <CardText className="card-text">
              “I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”
            </CardText>
            <div className="rating">
              <StarIcon style={{ color: 'gold' }}/>
              <StarIcon style={{ color: 'gold' }}/>
              <StarIcon style={{ color: 'gold' }}/>
              <StarIcon style={{ color: 'gold' }}/>
              <StarIcon style={{ color: 'gold' }}/>
            </div>
            <div className=" card_profile"><Stack>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }}/></Stack></div>
            <CardTitle className="card-title" tag="h5">
              Jane Smith
            </CardTitle>
            <div className="card_profile_name">Freelancer</div>
          </CardBody>
        </Card>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card className="card-main">
          <CardBody>
            <CardText className="card-text">
              “I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”
            </CardText>
            <div className="rating">
              <StarIcon style={{ color: 'gold' }}/>
              <StarIcon style={{ color: 'gold' }}/>
              <StarIcon style={{ color: 'gold' }}/>
              <StarIcon style={{ color: 'gold' }}/>
              <StarIcon style={{ color: 'gold' }}/>
            </div>
            <div className=" card_profile"><Stack>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }}/></Stack></div>
            <CardTitle className="card-title" tag="h5">
              Jane Smith
            </CardTitle>
            <div className="card_profile_name">Freelancer</div>
          </CardBody>
        </Card>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card className="card-main">
          <CardBody>
            <CardText className="card-text">
              “I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”
            </CardText>
            <div className="rating">
              <StarIcon style={{ color: 'gold' }}/>
              <StarIcon style={{ color: 'gold' }}/>
              <StarIcon style={{ color: 'gold' }}/>
              <StarIcon style={{ color: 'gold' }}/>
              <StarIcon style={{ color: 'gold' }}/>
            </div>
            <div className=" card_profile"><Stack>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }}/></Stack></div>
            <CardTitle className="card-title" tag="h5">
              Jane Smith
            </CardTitle>
            <div className="card_profile_name">Freelancer</div>
          </CardBody>
        </Card>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card className="card-main">
          <CardBody>
            <CardText className="card-text">
              “I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”
            </CardText>
            <div className="rating">
              <StarIcon style={{ color: 'gold' }}/>
              <StarIcon style={{ color: 'gold' }}/>
              <StarIcon style={{ color: 'gold' }}/>
              <StarIcon style={{ color: 'gold' }}/>
              <StarIcon style={{ color: 'gold' }}/>
            </div>
            <div className=" card_profile"><Stack>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }}/></Stack></div>
            <CardTitle className="card-title" tag="h5">
              Jane Smith
            </CardTitle>
            <div className="card_profile_name">Freelancer</div>
          </CardBody>
        </Card>
      )
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  switchForward = () => {
    let newSlide =
      this.state.goToSlide === this.slides.length - 1
        ? 0
        : this.state.goToSlide + 1;
    this.setState({ goToSlide: newSlide });
  };

  switchBackward = () => {
    let newSlide =
      this.state.goToSlide === 0
        ? this.slides.length - 1
        : this.state.goToSlide - 1;
    this.setState({ goToSlide: newSlide });
  };

  render() {
    return (
      <div style={{ width: "70%", height: "500px", margin: "0 auto" }} >
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={10}
          animationConfig={config.gentle}
          showNavigation={false}
          numberOfVisibleSlides={5}
        />
      </div>
    );
  }
}

export default MyCarousel;