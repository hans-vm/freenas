/** @jsx React.DOM */

// User View Template
// ==================


"use strict";

var React      = require("react");
var TWBS       = require("react-bootstrap");

var viewerUtil = require("../../../components/Viewer/viewerUtil");

var UserView = React.createClass({

    propTypes: {
      item: React.PropTypes.object.isRequired
    }

  , render: function() {
      var builtInUserAlert = null;

      if ( this.props.item["builtin"] ) {
        builtInUserAlert = (
          <TWBS.Row>
            <TWBS.Col xs={12}>
              <TWBS.Alert bsStyle   = "info"
                          className = "text-center">
                <b>{"This is a built-in FreeNAS user account."}</b>
              </TWBS.Alert>
            </TWBS.Col>
          </TWBS.Row>
        );
      }

      var editButton =
        <TWBS.Row>
          <TWBS.Col xs={12}>
            <TWBS.Button className = "pull-right"
                         onClick   = { this.props.handleViewChange.bind(null, "edit") }
                         bsStyle   = "info" >{"Edit User"}</TWBS.Button>
          </TWBS.Col>
        </TWBS.Row>;

      return (
        <div className="viewer-item-info">
          <TWBS.Grid fluid>
            {/* "Edit User" Button - Top */}
            { editButton }

            {/* User icon and general information */}
            <TWBS.Row>
              <TWBS.Col xs={3}
                        className="text-center">
                <viewerUtil.ItemIcon primaryString   = { this.props.item["full_name"] }
                                     fallbackString  = { this.props.item["username"] }
                                     iconImage       = { this.props.item["user_icon"] }
                                     seedNumber      = { this.props.item["id"] } />
              </TWBS.Col>
              <TWBS.Col xs={9}>
                <h3>{ this.props.item["username"] }</h3>
                <h4 className="text-muted">{ viewerUtil.writeString( this.props.item["full_name"], "\u200B" ) }</h4>
                <h4 className="text-muted">{ viewerUtil.writeString( this.props.item["email"], "\u200B" ) }</h4>
                <hr />
              </TWBS.Col>
            </TWBS.Row>

            {/* Shows a warning if the user account is built in */}
            { builtInUserAlert }

            {/* Primary user data overview */}
            <TWBS.Row>
              <viewerUtil.DataCell title = { "User ID" }
                                   entry = { this.props.item["id"] } />
              <viewerUtil.DataCell title = { "Primary Group" }
                                   entry = { this.props.item["group"] } />
              <viewerUtil.DataCell title = { "Shell" }
                                   entry = { this.props.item["shell"] } />
              <viewerUtil.DataCell title = { "Locked Account" }
                                   entry = { this.props.item["locked"] } />
              <viewerUtil.DataCell title = { "Sudo Access" }
                                   entry = { this.props.item["sudo"] } />
              <viewerUtil.DataCell title = { "Password Disabled" }
                                   entry = { this.props.item["password_disabled"] } />
            </TWBS.Row>

            {/* "Edit User" Button - Bottom */}
            { editButton }

          </TWBS.Grid>
        </div>
      );
    }

});

module.exports = UserView;