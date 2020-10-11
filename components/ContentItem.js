import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

import ContentItemTable from "../components/ContentItemTable";

const ContentItem = (props) => {
  return (
    <div>
      <Card>
        <CardHeader tag="h3">Featured</CardHeader>
        <CardBody>
          <ContentItemTable />
          <Button>Go somewhere</Button>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <ContentItemTable />
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <ContentItemTable />
        </CardBody>
      </Card>
    </div>
  );
};

export default ContentItem;
