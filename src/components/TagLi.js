import React from 'react';
import TagA from './TagA';

class TagLi extends React.Component {
  render() {
    const { childrenData } = this.props
    return (
      <>
        {
          childrenData.map((child, index) => {
            if (child.isActive) {
              return <li key={index} className="active">
                <TagA dataLink={child} />
                {child.children && <ul><TagLi childrenData={child.children} /></ul>}
              </li>
            } else {
              return <li key={index}>
                <TagA dataLink={child} />
                {child.children && <ul><TagLi childrenData={child.children} /></ul>}
              </li>
            }
          })
        }
      </>
    )
  }
}

export default TagLi;