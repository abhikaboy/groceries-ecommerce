import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { setSearch } from "../../Actions/setSearch";
export class SearchOverlayRaw extends Component {
  hide = () => {
    this.props.setSearch(false);
  };
  render() {
    return (
      <div>
        <Modal show={this.props.search.display} onHide={this.hide}>
          <Modal.Header closeButton>
            <Modal.Title>Search</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.hide}>
              <FormControl type="text" />
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setSearch: (show) => dispatch(setSearch(show)),
  };
};
export const SearchOverlay = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchOverlayRaw);
