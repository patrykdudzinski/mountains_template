import React from 'react';
import Carousel from './Carousel';
export default class Triangle extends React.Component {
    constructor(){
        super();
        this.users = [
            {
                name: 'Alex Green',
                img: 'katie.jpg',
                active: true,
                subheader: 'Traveller, 28',
                text: `Snowboarding has always been ritual for me. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nisi vitae impedit itaque, facere dolores veritatis id minima, doloribus, 
                aliquam culpa alias molestiae. Iusto magnam nisi consectetur tempora, 
                exercitationem quasi similique.`
            },
            {
                name: 'Ben Smith',
                active: false,
                img: 'ben.jpg',
                subheader: 'Climbing Coach, 43',
                text: `Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nisi vitae impedit itaque, facere dolores veritatis id minima, doloribus, 
                aliquam culpa alias molestiae. Iusto magnam nisi consectetur tempora, 
                exercitationem quasi similique.`
            },
            {
                name: 'Sam Pebble',
                active: false,
                img: 'sam.jpg',
                subheader: 'Student, 19',
                text: `Test test test test. Test mountains are very cool. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nisi vitae impedit itaque, facere dolores veritatis id minima, doloribus, 
                aliquam culpa alias molestiae. Iusto magnam nisi consectetur tempora, 
                exercitationem quasi similique.`
            }
        ]
    }
    render() {
        return (
          <section class="bottom_wrapper">
            <div class="bottom_wrapper__content">
                <h4 class="green_box__title">Testimonials</h4>
                <div class="bottom_wrapper__carousel">
                    <Carousel users={this.users} ></Carousel>
                </div>
            </div>
          </section>
        );
      }
}