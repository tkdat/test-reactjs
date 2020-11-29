import React from 'react';

class TagA extends React.Component {
  render() {
    const { dataLink } = this.props
    return (
      <>
        <a>
          <i className={dataLink.icon}></i>
          <strong>{dataLink.title}</strong>
          <small>{dataLink.subTitle}</small>
        </a>
      </>
    )
  }
}

export default TagA;