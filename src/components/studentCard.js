import React from "react";
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText,
    CardSubtitle,
  } from "reactstrap";

export default function StudentCard(props) {
  
    console.log("props", props.studentData);
   
    let { name, age, rollNo, lastName } = props.studentData;
    
    //   props.name = "chnage"; // we can not modify props , becaues it is read only.
    return (
      <>
        {props && (
          <Card>
            <CardImg
              top
              width={10}
              height={100}
              src="images/avatar2.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Student Details</CardTitle>
              <CardSubtitle>Name:{`${name}  ${lastName}`}</CardSubtitle>
              <CardText>Age:{age}</CardText>
              <CardText>Roll NO.:{rollNo}</CardText>
              
            </CardBody>
          </Card>
        )}
      </>
    );
  }