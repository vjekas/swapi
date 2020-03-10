import React, { Component } from 'react';
import { Menu, Container, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Container>
            <Menu.Item as={Link} to='/' name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick} />

            <Menu.Item as={Link} to='/people' name='people'
              active={activeItem === 'people'}
              onClick={this.handleItemClick} />

            <Menu.Item as={Link} to='/planets' name='planets'
              active={activeItem === 'planets'}
              onClick={this.handleItemClick} />

            <Menu.Item as={Link} to='/species' name='species'
              active={activeItem === 'species'}
              onClick={this.handleItemClick} />
          </Container>
        </Menu>
      </Segment>
    )
  }
}
