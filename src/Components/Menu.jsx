import React from "react";
import { Container, Col, Row, Button, Card } from "react-bootstrap";
import { Arr } from "../db";
import { useState } from "react";
import { useEffect } from "react";
import { FaShoppingBag } from "react-icons/fa";
function Menu() {
  const btns = ["all", "sandwitch", "pezza", "plate", "dessert"];
  const [menu, setMenu] = useState();
  useEffect(() => {
    setMenu(Arr.data);
  }, []);
  function handleClick(e) {
    let category = e.target.dataset.category;
    let fiteredMenu = Arr.data.filter((item) => item.category === category);
    setMenu(fiteredMenu);
    if (category === "all") setMenu(Arr.data);
  }
  return (
    <Container>
      <h1 className="text-center my-4">Menu</h1>
      <div className="position-absolute top-0 end-0 p-2 pointer">
        <FaShoppingBag size={20} />
      </div>
      <div className="d-flex justify-content-center flex-wrap  gap-3 my-5">
        {btns.map((item, index) => {
          return (
            <Button
              className="text-capitalize"
              onClick={handleClick}
              data-category={item}
              variant="outline-warning"
              key={index}
            >
              {item}
            </Button>
          );
        })}
      </div>
      <div>
        {menu?.map((item, index) => {
          return (
            <Row className="justify-content-center mx-auto">
              {item.items.map((item) => {
                return (
                  <Col md={3} sm={6}>
                    <Card style={{ width: "18rem" }} className="my-3">
                      <Card.Img
                        variant="top"
                        src="https://picsum.photos/150/100"
                      />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <h3>${item.price}</h3>
                        <Button variant="primary">Add to card</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
              ;
            </Row>
          );
        })}
      </div>
    </Container>
  );
}

export default Menu;
