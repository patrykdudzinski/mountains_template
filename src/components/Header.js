import React from 'react';


export default class Header extends React.Component {

  constructor(props) {

    super(props);
    
    this.menuElements = {
      0 : {
          name: 'About',
          href: '#'
      },
      1 : {
          name: 'Shop',
          href: '#'
      },
      2: {
          name: 'Testimonials',
          href: '#'
      }
    }
  }


  

  render() {
    var menuElements = this.menuElements;
    const Menu = Object.keys(menuElements).map( (index) =>
        <li class="header_list__element"><a href = {menuElements[index].href} >{menuElements[index].name}</a></li>
    )

    return (
      <header>
          <ul class="header_list">
              {Menu}
          </ul>
      </header>

    );

  }

}