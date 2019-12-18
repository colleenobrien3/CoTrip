import React from 'react';
import "./BookATripPage.css";
import NavBar from "../../components/Navbar/Navbar";
import BookATripImage from "../../components/BookATripImage/BookATripImage";
import Banner from "../../components/Banner/Banner";
import InputTextField from "../../components/InputTextField/InputTextField";
import Banner__pink from "../../components/Banner/Banner__pink.png";
import image1 from "assets/images/hawaii.png";
import image2 from "assets/images/greece.png";
import image3 from "assets/images/southernCaribbean.png";
import image4 from "assets/images/easternCaribbean.png";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

const BookATripPage = (props) => {
  return(
    <div className="BookATripPage">
      <NavBar />
      <Banner background={Banner__pink}>
        <h3 style={{margin: 0}}>Book a Trip</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search Trip"/>
      </Banner>
      <header className="BookATripPage__header">Upcoming Trips</header>
      <BookATripImage className="BookATripPage__images"
        cards={[
          {"image": "https://cdn.aarp.net/content/dam/aarp/money/budgeting_savings/2016/04/1140-yeager-sell-your-used-books.imgcache.rev6feda141288df73e8fd100822bb375ea.jpg", "url": "#", "description": "Hawaii May 2020"},
          {"image": image2, "url": "#", "description": "Greece & Croatia Cruise June 2020"},
          {"image": image3, "url": "#", "description": "Southern Caribbean Cruise July 2020"},
          {"image": image1, "url": "#", "description": "Hawaii May 2020"},
          {"image": image4, "url": "#", "description": "Eastern Caribbean Cruise New Year's 2021"}
        ]}
      >{props.children}</BookATripImage>
      <div className="BookATripPage__button-container">
        <Button text="View Previous Trips" color="pink" size="large"/>
      </div>
      <Footer />
    </div>
  );
}

export default BookATripPage;
