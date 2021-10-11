import React from 'react';
import HeroImage from '../img/hiker.png';
export default class Footer extends React.Component {

    render() {
        return (
          <footer class="footer_wrapper">
              <div class="hiker_img" ></div>
              <div class="moutains_img"></div>
              <div class="footer_wrapper__content">
                <div class="icon icon_pinterest"></div>
                <div class="icon icon_twitter"></div>
                <div class="icon icon_instagram"></div>
                <div class="icon icon_facebook"></div>
              </div>
          </footer>
        );
      }
}