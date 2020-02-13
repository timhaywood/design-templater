import React, { useState } from "react";
import styled from "styled-components";
import saveImage from "./DomToImage";
import { Calendar, Clock } from "react-feather";

const Heading = styled.h1`
  margin-bottom: 32px;
`;

const Content = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  font-family: sans-serif;
  margin: auto;
`;

const Controls = styled.div`
  background-color: white;
  height: 100vh;
  width: 420px;
  padding: 48px;
`;

const Design = styled.div`
  color: black;
  background-color: white;
  display: flex;
  justify-content: space-between;
  width: 640px;
  height: 360px;
  min-width: 640px;
  min-height: 360px;
  padding: 32px 48px;
  line-height: 150%;
  margin: 0 auto;
`;

const ContentArea = styled.div`
  width: 46%;
`;
const ImageArea = styled.div`
  border-radius: 16px;
  width: 250px;
  height: 300px;
  overflow: hidden;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
`;

const InputStyles = `
display: block;
margin-top: 8px;
margin-bottom: 24px;
font-family: sans-serif;
padding: 8px;
border: 2px solid black;
font-size: small;
resize: none;
`;

const InputArea = styled.textarea`
  ${InputStyles}
  width: 100%;
  height: 64px;
`;

const Input = styled.input`
  ${InputStyles}
`;

const Button = styled.button`
  color: white;
  padding: 8px;
  font-weight: bold;
  background-color: black;
  margin-top: 12px;
  border: none;
`;

const DescriptionArea = styled.div`
  white-space: pre-wrap;
`;

const ControlGroup = styled.div`
  display: flex;
  align-items: flex-start;

  label {
    margin-right: 8px;
  }
`;

const IconGroup = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  p {
    margin: 0;
    margin-left: 8px;
    padding-top: 4px;
  }
`;

export default function App() {
  const [heading, setHeading] = useState("Event Name");
  const [description, setDescription] = useState(
    "A brief description that describes the event. Should be kept short!",
  );
  const [search, setSearch] = useState("cross church");
  const [date, setDate] = useState("2020-01-01");
  const [time, setTime] = useState("01:01:00");

  const imageSearches = search.split(" ").join(",");
  const dateObject = new Date(`${date}${time && ` ${time}`}`);
  const dateString = dateObject.toLocaleDateString("en-UK", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const timeString = dateObject.toLocaleTimeString("en-UK", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  function handleSave(e, id) {
    e.preventDefault();
    saveImage(id);
  }

  return (
    <Content className="App">
      <Controls>
        <Heading>Event Slide Maker</Heading>
        <form>
          <Label>
            Heading
            <InputArea
              value={heading}
              onChange={event => setHeading(event.target.value)}
            />
          </Label>
          <Label>
            Description{" "}
            <InputArea
              value={description}
              onChange={event => setDescription(event.target.value)}
            />
          </Label>
          <Label>
            Image
            <Input
              value={search}
              onChange={event => setSearch(event.target.value)}
            />
          </Label>
          <ControlGroup>
            <Label>
              Date
              <Input
                type="date"
                value={date}
                onChange={event => setDate(event.target.value)}
              />
            </Label>
            <Label>
              Time
              <Input
                type="time"
                value={time}
                onChange={event => setTime(event.target.value)}
              />
            </Label>
          </ControlGroup>
          <Button onClick={(e) => handleSave(e, 'design')}>Save as PNG</Button>
        </form>
      </Controls>
      <Design id="design">
        <ContentArea>
          <h2>{heading}</h2>
          <DescriptionArea>{description}</DescriptionArea>
          {date && (
            <IconGroup>
              <Calendar />
              <p>{dateString}</p>
            </IconGroup>
          )}
          {date && (
            <IconGroup>
              <Clock />
              <p>{timeString}</p>
            </IconGroup>
          )}
        </ContentArea>
        <ImageArea>
          <img
            src={`https://source.unsplash.com/random/300x400/?${imageSearches}`}
            alt="Random"
          />
        </ImageArea>
      </Design>
    </Content>
  );
}
