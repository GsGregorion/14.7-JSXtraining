var Contacts = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired,
    },
  
    render: function() {
        return (
          <ul className="contactsList">
            {this.props.items.map(function(contact) {
                return 
                    React.createElement(Contact, {item: contact, key: contact.id})
                    //<Contact item={contact} key={contact.id} />   
                })
            }
          </ul>  
        );
    }
});
