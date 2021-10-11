import React from 'react';
import HeroImage from '../img/mountain_hero.jpg';
import Header from './Header';
import Chevron from '../img/chevron_right.svg';
import Boots from '../img/boots.png';
import HeroVideo from '../video/hero.mp4';

export default class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.subheader = props.subheader;
    this.header = props.header;

  }

  render() {
    return (
        <section style={{ background: `url(${HeroImage})` }}  class="app_section hero_section">
            <Header></Header>
            <div class="app_section__title-wrapper">
                <h2 class="app_section__subtitle"> {this.subheader} </h2>
                <h2 class="app_section__title"> {this.header} </h2>
            </div>
            <div class="app_section__content">
                <div class="green_box">
                    <div class="green_box__title-wrapper">
                        <h3 class="green_box__title">About us</h3>
                    </div>
                    <div class="green_box__content">
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nisi vitae impedit itaque, facere dolores veritatis id minima, doloribus, 
                            aliquam culpa alias molestiae. Iusto magnam nisi consectetur tempora, 
                            exercitationem quasi similique.</p>
                        <a href="#" class="green_box__icon">
                            <img src={Chevron}></img>
                        </a>
                    </div>
                </div>
                <div class="app_section__photo-wrapper">
                    <div class="small-photo" ></div>
                </div>
            </div>
            <section class="banner_wrapper">
                <div class="green_box full">
                    <div class="green_box__content to_start">
                        <img class="banner_wrapper__img" src={Boots}></img>     
                        <video class="banner_wrapper__video" controls>
                            <source src={HeroVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video> 
                    </div>
                </div>
                <div class="green_box full gray">
                    <div class="green_box__title-wrapper">
                        <h3 class="green_box__title">Hiking Boots</h3>
                    </div>
                    <div class="green_box__content">
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nisi vitae impedit itaque, facere dolores veritatis id minima, doloribus, 
                            aliquam culpa alias molestiae. Iusto magnam nisi consectetur tempora, 
                            exercitationem quasi similique.
                            Nisi vitae impedit itaque, facere dolores veritatis id minima, doloribus, 
                            aliquam culpa alias molestiae. Iusto magnam nisi consectetur tempora, 
                            exercitationem quasi similique.
                            Nisi vitae impedit itaque, facere dolores veritatis id minima, doloribus, 
                            aliquam culpa alias molestiae. Iusto magnam nisi consectetur tempora, 
                            exercitationem quasi similique.</p>
                            <a class="green_box__btn" href="#">Show more</a>
                    </div>
                </div>
            </section>
        </section>
        
    );

  }

}