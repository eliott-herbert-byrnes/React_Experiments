import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error(){
    const error = useRouteError()
    return (
        <>
            <h1>Error: {error.message}</h1>
            <h2>Status: {error.statusText}, {error.status}</h2>
        </>
    )
}