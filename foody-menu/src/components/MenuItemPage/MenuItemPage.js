import React, { Component } from 'react';
import { getMenuItemById } from '../../redux/modules/contacts/contactsOperations';
import Contact from '../Contact/Contact';
import { getContactbyID } from '../../redux/modules/contacts/contactsSelector';

export default class MenuItemPage extends Component {
  // componentDidMount = async () => {
  //   const { match } = this.props;
  //   const menuItem = await getMenuItemById(match.params.id);
  //   console.log(menuItem);
  //   this.setState({ ...menuItem });
  // };
  // componentDidMount = () => {
  //   const menuItem = getContactbyID;
  //   console.log(menuItem);
  //   this.setState({ ...menuItem });
  // };

  // handleGoBack = () => {
  //   const { location, history } = this.props;
  //   const { category } = this.state;

  //   if (location.state) return history.push(location.state.from);

  //   return history.push({
  //     pathname: '/menu',
  //     search: `category=${category}`,
  //   });
  // };

  render() {
    const { name, description, image, price, category } = this.props;
    return (
      <div>
        <Contact
          name={name}
          description={description}
          image={image}
          price={price}
          category={category}
        />
        <button onClick={this.handleGoBack}>back to Menu</button>
      </div>
    );
  }
}
