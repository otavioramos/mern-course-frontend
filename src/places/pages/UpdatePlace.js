import React from "react";
import {useParams} from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from "../../shared/util/validators"

const DUMMY_PLACES = [
    {
        id: "p1",
        title: "Empire State Building",
        description: "One of the most famous sky scrapers in the world!",
        imageUrl:
            "https://marvel-b1-cdn.bc0a.com/f00000000179470/www.esbnyc.com/sites/default/files/styles/small_feature/public/2019-10/home_banner-min.jpg?itok=uZt-03Vw",
        address: "20 W 34th St, New York, NY 10001",
        location: {
            lat: 40.7484405,
            lng: -73.9878584,
        },
        creator: "u1",
    },
    {
        id: "p2",
        title: "Empire State Building",
        description: "One of the most famous sky scrapers in the world!",
        imageUrl:
            "https://marvel-b1-cdn.bc0a.com/f00000000179470/www.esbnyc.com/sites/default/files/styles/small_feature/public/2019-10/home_banner-min.jpg?itok=uZt-03Vw",
        address: "20 W 34th St, New York, NY 10001",
        location: {
            lat: 40.7484405,
            lng: -73.9878584,
        },
        creator: "u2",
    },
];

const UpdatePlace = (props) => {
    const placeId = useParams().placeId;

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    if (!identifiedPlace) {
        return <div className="center"><h2>Could not find place!</h2></div>
    }

    return <form>
        <Input id="title" element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]}
               errorText="Please enter a valid title." onInput={() => {
        }} value={identifiedPlace.title} valid={true}/>
        <Input id="description" element="textarea" label="Description" validators={[VALIDATOR_MINLENGTH(5)]}
               errorText="Please enter a valid description (at least 5 characters)." onInput={() => {
        }} value={identifiedPlace.description} valid={true}/>
        <Button type="submit" disabled={true}>UPDATE PLACE</Button>
    </form>;
};

export default UpdatePlace;