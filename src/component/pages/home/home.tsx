import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import Input from "../../../helpers/input/input";
import AutocompleteInput from "../../../helpers/input/autocomplete-input";
import { top100Films, top100Films2 } from "./data";
import Selects from "../../../helpers/select/select";
import NativeSelects from "../../../helpers/select/native-select";
import { UploadAvatar } from "../../../helpers/upload/upload-image";
import { RouteChildrenProps } from "react-router-dom";

interface Props extends RouteChildrenProps {}

export default function Home(props: Props) {
  const [idFilm, setIdFilm] = React.useState<number | null>(null);
  const [id, setId] = React.useState<number | null>(null);

  // test change search by url
  React.useEffect(() => {
    const param = new URLSearchParams(props.location.search),
      id = param.get("id");

    setId(Number(id));
  }, [props.location.search]);

  const changeURL = () => {
    props.history.push("?id=3");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mt-3 mb-3">
          <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="contained primary button group"
          >
            <Button>One</Button>
            <Button onClick={changeURL}>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </div>

        <div className="col-lg-3 col-md-4">
          <p>Input text</p>
          <Input type="text" placeholder="input text" />
        </div>
        <div className="col-lg-3 col-md-4">
          <p>Input password</p>
          <Input type="password" placeholder="input password" />
        </div>
        <div className="col-lg-3 col-md-4">
          <p>Input number</p>
          <Input type="number" placeholder="input number" />
        </div>
        <div className="col-lg-3 col-md-4">
          <p>Input search</p>
          <Input type="search" placeholder="input search" />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-lg-3 col-md-4">
          <p>Autocomplete Input</p>
          <AutocompleteInput options={top100Films} textField="title" />
        </div>
        <div className="col-lg-3 col-md-4">
          <p>Autocomplete Input</p>
          <Selects
            options={top100Films2}
            idField="id"
            valueField="title"
            placeholder="Select"
            value={idFilm ? idFilm : ""}
            onChange={event => {
              setIdFilm(Number(event.target.value));
            }}
          />
        </div>

        <div className="col-lg-3 col-md-4">
          <p>Autocomplete Input</p>
          <NativeSelects
            options={top100Films2}
            idField="id"
            valueField="title"
            placeholder="Select"
            value={idFilm ? idFilm : ""}
            onChange={event => {
              setIdFilm(Number(event.target.value));
            }}
          />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-6">
          <p>Upload image</p>
          <UploadAvatar addFile={() => {}} />
        </div>
      </div>

      <div>id: {id}</div>
    </div>
  );
}
