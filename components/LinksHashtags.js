import React from "react";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

const LinksHashtags = (props) => {
  return (
    <ListGroup>
      <ListGroupItem
        active
        tag="button"
        action
        className="justify-content-between"
      >
        Cras justo odio <Badge pill>14</Badge>
      </ListGroupItem>
      <ListGroupItem tag="button" action className="justify-content-between">
        Dapibus ac facilisis in <Badge pill>2</Badge>
      </ListGroupItem>
      <ListGroupItem tag="button" action className="justify-content-between">
        Morbi leo risus <Badge pill>1</Badge>
      </ListGroupItem>
    </ListGroup>
  );
};

export default LinksHashtags;
