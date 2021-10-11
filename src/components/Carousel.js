import React from 'react';
// function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
// }
export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.users = props.users;
        this.active = 0;
        this.changeActive=this.changeActive.bind(this);
    }
    
    changeActive(item_id){
        this.active = item_id;
        this.forceUpdate();
        // React.useReducer(() => ({}))[1];
        // this.active = item_id;
    }
    render() {
        var component = this,
            active_user = this.users[this.active],
            active_user_img = require(`../img/${active_user.img}`).default;
        return (
          <section class="users_carousel">
                <div class="users_carousel__active">
                    <div class="active_user__icon" 
                        style={{
                            backgroundImage: `url(${active_user_img})`
                        }}>        
                    </div>
                    <h5 class="users_carousel__header">{active_user.name}</h5>
                    <h6 class="users_carousel__subheader">{active_user.subheader}</h6>
                    <div class="green_box centered">
                        <div class="green_box__content">
                            <h6 class="quote to_top"></h6>
                            <p class="green_box__text">{active_user.text}</p>
                            <h6 class="quote  to_bottom"></h6>
                        </div>
                    </div>
                </div>
                <div class="user_carousel__footer flex">
                    { 
                        this.users.map(function(item, key){
                            console.log(key)
                            var class_name = ((key == component.active) ? 'circle_icon filled' : 'circle_icon' );
                                return ( 
                                    <div item_id={key} 
                                        onClick={() => { component.changeActive(key); } }
                                        class={class_name}></div> 
                                );
                        })
                    }
                </div>
          </section>
        );
      }
}